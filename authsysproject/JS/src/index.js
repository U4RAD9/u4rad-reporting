import React, { Component } from "react";
import { useRef } from "react";
import { render } from "react-dom";
import "./style.css";
import CKEditor from "@ckeditor/ckeditor5-react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import XrayChest from "./Utils/XrayChest";
import CampECG from "./Utils/CampECG";
import CampECG2 from "./Utils/CampECG2";
import Optometry from "./Utils/Optometry";
import Optometry2 from "./Utils/Optometry2";
import Optometry3 from "./Utils/Optometry3";
import Optometry4 from "./Utils/Optometry4";
import Audiometry from "./Utils/Audiometry";
import PnsAbnormal from "./Utils/PnsAbnormal";
import XrayLeftShoulder from "./Utils/XrayLeftShoulder";
import XrayRightShoulder from "./Utils/XrayRightShoulder";
import XrayKnee from "./Utils/XrayKnee";
import XraySpineCervical from "./Utils/XraySpineCervical";
import XraySpineLumber from "./Utils/XraySpineLumber";
import XraySpineDorsal from "./Utils/XraySpineDorsal";
import Vitals from "./Utils/Vitals";
import CtHead from "./Utils/CtHead";
import CtAbdomen from "./Utils/CtAbdomen";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Test } from "@jsonforms/core";
import html2pdf from "html2pdf.js";
import axios from "axios";
import $ from 'jquery';

//cornerstone imports - core, tools, dicom-image-loader, streaming-image-loader, dicomParser
import * as cornerstone from '@cornerstonejs/core';
import * as cornerstoneTools from '@cornerstonejs/tools';
import cornerstoneDICOMImageLoader from '@cornerstonejs/dicom-image-loader';
import { cornerstoneStreamingImageVolumeLoader, cornerstoneStreamingDynamicImageVolumeLoader } from '@cornerstonejs/streaming-image-volume-loader';
import dicomParser from 'dicom-parser';

//VERY IMPORTANT IMPORT
//all the associated JS files that this function requires are stored in Utils folder
//ensure that the following files are present in Utils
//removeInvalidTags.js
//ptScalingMetaDataProvider.js
//getPixelSpacingInformation.js
//createImageIdsAndCacheMetaData.js
//convertMultiframeImageIds.js

//when adding functionality for PET scans, uncomment the last IF statement from createImageIdsAndCacheMetaData.js
//allow typescript files in the project and place https://github.com/cornerstonejs/cornerstone3D/blob/main/utils/demo/helpers/getPTImageIdInstanceMetadata.ts in Utils
import createImageIdsAndCacheMetaData from './Utils/createImageIdsAndCacheMetaData';



//cornerstone inits - core, tools
await cornerstone.init();
cornerstoneTools.init();


//cornerstone metadata providers, adds generic metadata provider and calibrated pixel spacing metadata provider
cornerstone.metaData.addProvider(
  cornerstone.utilities.calibratedPixelSpacingMetadataProvider.get.bind(
    cornerstone.utilities.calibratedPixelSpacingMetadataProvider
  ),
  11000);

cornerstone.metaData.addProvider(
  cornerstone.utilities.genericMetadataProvider.get.bind(
    cornerstone.utilities.genericMetadataProvider
  ),
  10000
);


const { preferSizeOverAccuracy, useNorm16Texture } =
  cornerstone.getConfiguration().rendering;

window.cornerstone = cornerstone;
window.cornerstoneTools = cornerstoneTools;

//Register and set up cornerstone volume loader
cornerstone.volumeLoader.registerVolumeLoader('cornerstoneStreamingImageVolume', cornerstoneStreamingImageVolumeLoader);
cornerstone.volumeLoader.registerUnknownVolumeLoader(cornerstoneStreamingImageVolumeLoader);
cornerstone.volumeLoader.registerVolumeLoader('cornerstoneStreamingDynamicImageVolume', cornerstoneStreamingDynamicImageVolumeLoader);


//Register and set up cornerstone dicom image loader
cornerstoneDICOMImageLoader.external.cornerstone = cornerstone;
cornerstoneDICOMImageLoader.external.dicomParser = dicomParser;
cornerstoneDICOMImageLoader.configure({
    useWebWorkers: true,
    decodeConfig: {
      convertFloatPixelDataToInt: false,
      use16BitDataType: preferSizeOverAccuracy || useNorm16Texture,
    },
});

let maxWebWorkers = 1;

if (navigator.hardwareConcurrency) {
  maxWebWorkers = Math.min(navigator.hardwareConcurrency, 7);
}


//dicom image loader configuration settings
var config = {
  maxWebWorkers,
  startWebWorkersOnDemand: false,
  taskConfiguration: {
    decodeTask: {
      initializeCodecsOnStartup: false,
      strict: false,
    },
  },
};

cornerstoneDICOMImageLoader.webWorkerManager.initialize(config);

//create a toolgroup id and a variable for the toolgroup created in componentWillMount()
const toolGroupId = 'myToolGroup';
var toolGroup

//create a rendering engine and define viewport ids
const renderingEngineId = 'myRenderingEngine';
const renderingEngine = new cornerstone.RenderingEngine(renderingEngineId);
const viewportIds = ['first', 'second', 'third', 'fourth']

//viewport variables
let first_viewport;
let second_viewport;
let third_viewport;
let fourth_viewport;
let viewport_list = {};

//map for storing the image ID display divs in accordance with viewport id
let indexMap = {first: 'viewport1Index', second: 'viewport2Index', third: 'viewport3Index', fourth: 'viewport4Index'}

//previously selected element and viewport
var selected_viewport;
var prev_selected_element;

//non CT image Id list
var nonCT_ImageIds = [];

var curr_tool = null;
var prev_layout = 'one';

//Dict of all cornerstone tools 
const Tools = {"Length": cornerstoneTools.LengthTool, "Angle": cornerstoneTools.AngleTool, "CobbAngle": cornerstoneTools.CobbAngleTool, 
  "RectangleROI": cornerstoneTools.RectangleROITool, "CircleROI": cornerstoneTools.CircleROITool, "EllipticalROI": cornerstoneTools.EllipticalROITool,
  "FreehandROI": cornerstoneTools.PlanarFreehandROITool, "Bidirectional": cornerstoneTools.BidirectionalTool, "Zoom": cornerstoneTools.ZoomTool, 
  "Pan": cornerstoneTools.PanTool, "Contrast": cornerstoneTools.WindowLevelTool, "Probe": cornerstoneTools.ProbeTool,"Eraser": cornerstoneTools.EraserTool, 
  "PlanarRotate": cornerstoneTools.PlanarRotateTool, "Height": cornerstoneTools.HeightTool, "SplineROI": cornerstoneTools.SplineROITool, 
  "StackScroll": cornerstoneTools.StackScrollMouseWheelTool, "ArrowAnnotate": cornerstoneTools.ArrowAnnotateTool
}


var current_user = JSON.parse(
  document.getElementById("current-user").textContent
);

///////////// Dynamic lists by aman gupta on 07/07/2023 ///////////////
const options = JSON.parse(current_user.serviceslist).map((service) => ({
  label: service.fields.title,
  id: service.pk,
}));

const exportOptions = JSON.parse(current_user.exportlist).map((item) => ({
  label: item.fields.export,
  id: item.pk,
}));

class App extends Component {
  editor = null;
  constructor() {
    super();
    this.state = {
      modal: false,
      reportFrmData: this.generatePatientTable(),
      options_label: "DEFAULT",
    };
    this.ActionEvents = this.ActionEvents.bind(this);
    this.GetCopiedEvents = this.GetCopiedEvents.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSeletion = this.handleSeletion.bind(this);
    this.generateReport = this.generateReport.bind(this);
    this.GetDivContentOnPDF = this.GetDivContentOnPDF.bind(this);
    this.GetDivContentOnPDFWithoutImage = this.GetDivContentOnPDFWithoutImage.bind(this);
    this.GetEcgContentOnPDF = this.GetEcgContentOnPDF.bind(this);
    this.uploadEcgPDF = this.uploadEcgPDF.bind(this);
    this.uploadXrayPDF = this.uploadXrayPDF.bind(this);
    this.UploadDivContentOnPDFVitals = this.UploadDivContentOnPDFVitals.bind(this);
    this.GetDivContentOnWord = this.GetDivContentOnWord.bind(this);
    this.onclickDiv = this.onclickDiv.bind(this);
    this.viewportSettings = this.viewportSettings.bind(this);
    this.toggleTool = this.toggleTool.bind(this);
    this.orientationSettings = this.orientationSettings.bind(this);
    this.windowingSettings = this.windowingSettings.bind(this);
    this.alignmentSettings = this.alignmentSettings.bind(this);
    this.layoutSettings = this.layoutSettings.bind(this);
    this.cornerstone = this.cornerstone.bind(this);
    this.volumeOrientation = this.volumeOrientation.bind(this);
    this.slabThickness = this.slabThickness.bind(this);
    this.capture = this.capture.bind(this);
    this.fullScreen = this.fullScreen.bind(this);
    this.drop = this.drop.bind(this);
    this.allowDrop = this.allowDrop.bind(this);  
    
  }


  allowDrop(event){
    event.preventDefault();
  }

  //when dropping a preview image onto a viewport
  drop(event){
    event.preventDefault();

    //newViewport needed for volume viewport
    let newViewport;

    //get volume id/image IDs and modality
    const obj = JSON.parse(event.dataTransfer.getData('text'));
    const ID = obj[0];
    const modality = obj[1];

    //get all related elements
    const parentElement = event.target.parentElement
    const viewport_ID = parentElement.getAttribute('data-value');
    var viewport = renderingEngine.getViewport(viewport_ID);
    

    //if the modality is CT
    if (modality == 'CT' || modality == 'MR'){

      //condition for if the viewport is a stack viewport
      if (viewport.type === cornerstone.Enums.ViewportType.STACK){

        //change the viewport to a volume viewport aysnchronously 
        (async () => {
          newViewport = await cornerstone.utilities.convertStackToVolumeViewport({
            options: {volumeId: ID, viewportId: viewport_ID, orientation: cornerstone.Enums.OrientationAxis.AXIAL},
            viewport: viewport
          });
          newViewport.setProperties({rotation: 0});
          toolGroup.addViewport(newViewport.id, renderingEngineId);
          newViewport.render();

          
          let currElement = newViewport.element
          let elementID = '#' + currElement.id

          //remove previous event listeners and add new event listener for capturing image index
          $(elementID).off();
          currElement.addEventListener(cornerstone.EVENTS.VOLUME_NEW_IMAGE, () => {
            let index = newViewport.getSliceIndex() + 1;
            
            //update image index div 
            let indexElem = document.getElementById(indexMap[newViewport.id])
            indexElem.innerHTML = 'Image: ' + index + ''

          });

        })();
      }

      //condition for if the viewport is already a volume viewport
      else {
        viewport.setVolumes([{volumeId: ID}]);
        viewport.render()
      }
    }

    //condition for non-CT modalities
    if (modality != 'CT' && modality != 'MR'){

      //condition for if the viewport is a volume viewport
      if (viewport.type === cornerstone.Enums.ViewportType.ORTHOGRAPHIC){
        
        //get the viewport input and change it to stack viewport asynchronously 
        (async () => {
          renderingEngine.disableElement(viewport_ID)
          let curr = viewport_list[viewport_ID]
          curr.type = cornerstone.Enums.ViewportType.STACK;
          delete curr.defaultOptions;
          renderingEngine.enableElement(curr);
          viewport = renderingEngine.getViewport(viewport_ID);
          viewport.setProperties({rotation: 0});
          toolGroup.addViewport(viewport.id, renderingEngineId);
          viewport.setStack(nonCT_ImageIds[Number(ID)]);
          viewport.render();

          //remove previous event listeners and add new event listener for capturing image index
          let currElement = viewport.element;
          let elementID = '#' + currElement.id
          $(elementID).off(); //jquery for removing event listeners
          currElement.addEventListener(cornerstone.EVENTS.STACK_NEW_IMAGE, () => {
            let index = viewport.getCurrentImageIdIndex() + 1;
              
            //update image index
            let indexElem = document.getElementById(indexMap[viewport.id])
            indexElem.innerHTML = index
          });
        })();
        
      
        //condition for if the viewport is already a stack viewport
      } else {
        viewport.setStack(nonCT_ImageIds[Number(ID)]);
        viewport.render();
      }
    }; 
  };
   

  //function to toggle full screen settings for viewer, changes css settings for div with ID page-content and for CKEditor
  fullScreen(call){
    const mainPage = document.getElementById('page-content');
    const reportEditor = document.getElementById('reportEditor');
    const valueChange = document.getElementById('fullScreen')
    switch(call){
      case 'small':
        mainPage.style.gridTemplateColumns = '20% 80%';
        reportEditor.style.display = 'none'
        valueChange.value = 'full'
        break;
      case 'full':
        mainPage.style.gridTemplateColumns = '25% 15% 60%';
        reportEditor.style.display = 'block'
        valueChange.value = 'small'
        break;
    }

    //important, resizes the image inside the viewport when the viewport size changes
    renderingEngine.resize(true, false);
  }  


  //function to capture selected viewport and download it as image
  //IMP: need to change this so that captured image is placed inside report
  capture(element){
    html2canvas(element, { allowTaint: true }).then(function (canvas){
      const image = document.createElement('a');
      image.href = canvas.toDataURL('image/png');
      image.download = 'screenshot.png';
      image.click();
    })
  }

  //function for populating series preview tab, caching images, creating volumes if needed
  async cornerstone(PARAM){
    try {
      const previewTab = document.getElementById('previewTab');
      const studyid = PARAM
      
      //get csrf token for POST request
      const re = await fetch("/get-csrf-token/");
      const FI = await re.json();
      const token = FI.csrf_token;

      //fetch study details from view that accesses orthanc server, pass studyid as a parameter
      const response = await fetch('/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          "X-CSRFToken": token
        },
        body: studyid
      });
      const data = await response.json();

      //patient + study details
      const study_uid = data.study_uid;
      const series = data.series;
      const name = data.name;
      const id = data.id;
      const study_date = data.date;
      const study_time = data.time;
      
      let k = 0
      let imageIdIndex = 0;

      previewTab.innerHTML += `<p style="margin-bottom:0">Name: ${name}<br>ID: ${id}<br>Study Date: ${study_date}<br>Study Time: ${study_time}</p>`


      for (let item of series){

        //create IDS and cache metadata of dicom files
        let imageId = await createImageIdsAndCacheMetaData({
          StudyInstanceUID: study_uid,
          SeriesInstanceUID: item[0],

          //put the url of the orthanc server with /dicom-web
          //example http://127.0.0.1:2002/dicom-web
          wadoRsRoot: 'http://13.202.103.243:2002/dicom-web',
        });


        //populate preview tab
        let image = document.createElement('img');
        image.src = item[3]; 
        image.style.height = '150px';
        image.style.width = '150px';
        image.style.marginBottom = '3px';

        //conditional to check whether modality is CT or anything else 
        if (item[1] == 'CT' || item[1] == 'MR'){
          //create unique volume id
          let volumeId = 'cornerstoneStreamingImageVolume: myVolume' + k;
          k += 1;
          image.dataset.value = volumeId;

          //create volume object and put it in cache if the modality is CT
          let volume = await cornerstone.volumeLoader.createAndCacheVolume(volumeId, { imageIds: imageId, });

          //cache optimization
          cornerstone.utilities.cacheUtils.performCacheOptimizationForVolume(volumeId);

          //load the created volume
          volume.load();

        } else{

          nonCT_ImageIds.push(imageId);
          //store the index of the imageIDs for nonCT_Images
          //the corresponding index in the list is stored as the data-value attribute in the preview image
          image.dataset.value = imageIdIndex;
          imageIdIndex += 1;
        }

        //add previews to previewTab.innerHTML
        image.dataset.modality = item[1];
        image.draggable = true;
        previewTab.innerHTML += `<p style='margin-bottom: 0px'>${item[1]}: ${item[2]}</p>`; 
        previewTab.appendChild(image);

      }

      //event delegation to attach event listener to each preview image in the preview tab
      previewTab.addEventListener('dragstart', (event) => {
        if(event.target.tagName === 'IMG'){
          event.dataTransfer.setData("text", JSON.stringify([event.target.dataset.value, event.target.dataset.modality]));
        }
      });

      
    } catch (error){
      console.error(error);
    } 
  }

 
  //function to set new tool active and previous tool passive
  toggleTool(newTool){
    var tool = Tools[newTool].toolName;
    if(curr_tool != null){
      toolGroup.setToolPassive(curr_tool);
    };
    toolGroup.setToolActive(tool, {
      bindings: [
        {
          mouseButton: cornerstoneTools.Enums.MouseBindings.Primary,
        },
      ],
    });
    curr_tool = tool;
  }

  //viewport layout settings for single viewport, 2 viewports, or 4 viewports
  layoutSettings(event){
    const call = event.target.value;
    const container = document.getElementById('viewport-container');
    const viewport2 = document.getElementById('viewport2');
    const viewport3 = document.getElementById('viewport3');
    const viewport4 = document.getElementById('viewport4');

    switch(call){
      case 'one':
        if (prev_layout == 'four'){
          renderingEngine.disableElement(viewportIds[2]);
          renderingEngine.disableElement(viewportIds[3]);
          toolGroup.removeViewports(renderingEngineId, viewportIds[2]);
          toolGroup.removeViewports(renderingEngineId, viewportIds[3]);
          viewport3.style.display = 'none';
          viewport4.style.display = 'none';
        }
        renderingEngine.disableElement(viewportIds[1]);
        toolGroup.removeViewports(renderingEngineId, viewportIds[1]);
        viewport2.style.display = 'none';
        container.style.gridTemplateColumns = 'none';
        container.style.gridTemplateRows = 'none'
        break;
      case 'two':
        if (prev_layout == 'four'){
          renderingEngine.disableElement(viewportIds[2]);
          renderingEngine.disableElement(viewportIds[3]);
          toolGroup.removeViewports(renderingEngineId, viewportIds[2]);
          toolGroup.removeViewports(renderingEngineId, viewportIds[3]);
          viewport3.style.display = 'none';
          viewport4.style.display = 'none';
        } else{
          renderingEngine.enableElement(second_viewport);
          toolGroup.addViewport(viewportIds[1], renderingEngineId);
          viewport2.style.display = 'block';
        }
        container.style.gridTemplateColumns = '50% 50%';
        container.style.gridTemplateRows = 'none'
        
        break;
      case 'four':
        if (prev_layout == 'one'){
          renderingEngine.enableElement(second_viewport);
          viewport2.style.display = 'block';
          toolGroup.addViewport(viewportIds[1], renderingEngineId);
        }
        renderingEngine.enableElement(third_viewport);
        renderingEngine.enableElement(fourth_viewport);
        toolGroup.addViewport(viewportIds[2], renderingEngineId);
        toolGroup.addViewport(viewportIds[3], renderingEngineId);

        viewport3.style.display = 'block';
        viewport4.style.display = 'block';
        container.style.gridTemplateColumns = '50% 50%';
        container.style.gridTemplateRows = '50% 50%';
        break;
    }
    renderingEngine.resize(true, false);
    prev_layout = call;
    event.target.value = ''
  }

  //volume slab thickness settings for volume viewports
  slabThickness(val, id){
    const viewport = renderingEngine.getViewport(id);
    viewport.setBlendMode(cornerstone.Enums.BlendModes.MAXIMUM_INTENSITY_BLEND);
    viewport.setProperties({ slabThickness: Number(val)});
    viewport.render();
  }

  //function for image alignment in viewport, uses viewport display area
  alignmentSettings(call, id){
    const viewport = renderingEngine.getViewport(id);
    var display;
    switch(call){
      case 'AlignLeft':
        display = {"imageArea": [1.1, 1.1], "imageCanvasPoint": {'imagePoint':[0, 0.5], 'canvasPoint':[0, 0.5]}}
        viewport.setDisplayArea(display)
        break;
      case 'AlignRight':
        display = {"imageArea": [1.1, 1.1], "imageCanvasPoint": {'imagePoint':[1, 0.5], 'canvasPoint':[1, 0.5]}}
        viewport.setDisplayArea(display)
        break;
      case 'AlignCenter':
        display = {"imageArea": [1.1, 1.1], "imageCanvasPoint": {'imagePoint':[0.5, 0.5], 'canvasPoint':[0.5, 0.5]}}
        viewport.setDisplayArea(display)
        break;
    }
    viewport.render();
  }

  //volume orientation settings - coronal, sagittal, axial 
  volumeOrientation(event, id){
    const call = event.target.value
    const viewport = renderingEngine.getViewport(id);
    switch(call){
      case 'axial':
        viewport.setOrientation(cornerstone.Enums.OrientationAxis.AXIAL);
        break;
      
      case 'sagittal':
        viewport.setOrientation(cornerstone.Enums.OrientationAxis.SAGITTAL)
        break;
      
      case 'coronal':
        viewport.setOrientation(cornerstone.Enums.OrientationAxis.CORONAL)
        break;
    }
    event.target.value = ''
  }

  //function for orientation settings - right rotate, left rotate, horizontal flip, vertical flip
  orientationSettings(event, id){
    const call = event.target.value
    const viewport = renderingEngine.getViewport(id);
    const { rotation } = viewport.getProperties();
    switch(call){
      case 'Rleft':
        viewport.setProperties({rotation: rotation - 90});
        break; 

      case 'Rright':
        viewport.setProperties({rotation: rotation + 90});
        break;

      case 'Hflip':
        const { flipHorizontal } = viewport.getCamera();
        viewport.setCamera({ flipHorizontal: !flipHorizontal })
        break;

      case 'Vflip':
        const { flipVertical } = viewport.getCamera();
        viewport.setCamera({ flipVertical: !flipVertical })
        break;
    }
    viewport.render();
    event.target.value = '';
  }

  //function for windowing settings (for any changes, change the upper and lower voiRange for specific windowing) and invert
  //might need to fix some value
  windowingSettings(event, id){
    const call = event.target.value
    const viewport = renderingEngine.getViewport(id);
    switch(call){
      case 'Invert':
        const { invert } = viewport.getProperties()
        viewport.setProperties({invert: !invert});
        break;

      case 'Lungs':
        viewport.setProperties({voiRange: {upper: 1600,lower: -600}});
        break;

      case 'Brain':
        viewport.setProperties({voiRange: {upper: 70,lower: 30}});
        break;

      case 'Bone':
        viewport.setProperties({voiRange: {upper: 2000,lower: 500}});
        break;

      case 'ST':
        viewport.setProperties({voiRange: {upper: 350,lower: 50}});
        break;

      case 'Abdomen':
        viewport.setProperties({voiRange: {upper: 400,lower: 40}});
        break;
          
      case 'Liver':
        viewport.setProperties({voiRange: {upper: 160,lower: 60}});
        break;
          
      case 'Mediastinal':
        viewport.setProperties({voiRange: {upper: 500,lower: 50}});
        break;
    };
    event.target.value = '';
    viewport.render();
  }

  //function to reset to regular viewport settings
  viewportSettings(call, id){ 
    const viewport = renderingEngine.getViewport(id);
    switch(call){
        case 'Reset':
          viewport.resetCamera();
          viewport.resetProperties();
          break;
    };
    viewport.render()
  }
  

  onclickDiv(e) {
    var ctrlDown = false,
      ctrlKey = 17,
      cmdKey = 91,
      vKey = 86,
      cKey = 67;

    document
      .onkeydown(function (e) {
        if (e.keyCode == ctrlKey || e.keyCode == cmdKey) ctrlDown = true;
      })
      .keyup(function (e) {
        if (e.keyCode == ctrlKey || e.keyCode == cmdKey) ctrlDown = false;
      });

    // Document Ctrl + C/V
    document.keydown(function (e) {
      if (ctrlDown && e.keyCode == cKey) console.log("Document catch Ctrl+C");
      if (ctrlDown && e.keyCode == vKey) console.log("Document catch Ctrl+V");
    });
  }

  ///////////ecg image by aman on 21/08/23
  componentDidMount() {
    
    try {
      const urlSearchParams = new URLSearchParams(window.location.search);
      const imageUrl = urlSearchParams.get("data-reportimage");
      const studyid = urlSearchParams.get("data-study-id")

      //setting cache size
      cornerstone.cache.setMaxCacheSize(32000000000);

      //use normal array buffer
      cornerstone.setUseSharedArrayBuffer(false);
      const elements = [document.getElementById('viewport1'), document.getElementById('viewport2'), document.getElementById('viewport3'), document.getElementById('viewport4')]
      
      //create tool groups for storing all tools
      toolGroup = cornerstoneTools.ToolGroupManager.createToolGroup(toolGroupId);
  
           
      
      //adding tools to toolGroup
      for (const [key, value] of Object.entries(Tools)){
        cornerstoneTools.addTool(value);
        toolGroup.addTool(value.toolName);
      }

      //set scroll active
      toolGroup.setToolActive(cornerstoneTools.StackScrollMouseWheelTool.toolName);

     
      toolGroup.setToolConfiguration(cornerstoneTools.PlanarFreehandROITool.toolName, {
        calculateStats: true
      });
      toolGroup.setToolConfiguration(cornerstoneTools.HeightTool.toolName, {
        calculateStats: true
      });
      
      //define 4 stack viewports with viewport id, viewport type, DOM element to be used
      first_viewport = {
        viewportId: viewportIds[0],
        type: cornerstone.Enums.ViewportType.STACK,
        element: elements[0],
        };

      second_viewport = {
        viewportId: viewportIds[1],
        type: cornerstone.Enums.ViewportType.STACK,
        element: elements[1],
      };

      third_viewport = {
        viewportId: viewportIds[2],
        type: cornerstone.Enums.ViewportType.STACK,
        element: elements[2],
      };
      
      fourth_viewport = {
        viewportId: viewportIds[3],
        type: cornerstone.Enums.ViewportType.STACK,
        element: elements[3],
      };

      viewport_list = {first: first_viewport, second: second_viewport, third: third_viewport, fourth: fourth_viewport}

      //enable first_viewport, make it the previously selected viewport, set its properties, add the toolgroup
      renderingEngine.enableElement(first_viewport);
      selected_viewport = viewportIds[0];
      prev_selected_element = elements[0];

      const viewport = renderingEngine.getViewport(selected_viewport);

      //need to set rotation to 0 in order to use it as a property for any rotation specific settings
      viewport.setProperties({rotation: 0});
      toolGroup.addViewport(viewportIds[0], renderingEngineId);

      //function to cache images and metadata, create volumes if needed
      //PUT REFRESH CONDITION SO THAT THIS FUNCTION DOES NOT RUN ON REFRESH
      this.cornerstone(studyid);

      let i = 0
      //event listeners for viewports
      elements.forEach((item) => {

        //initial event listener for stack viewport to capture image index
        item.addEventListener(cornerstone.EVENTS.STACK_NEW_IMAGE, function(){
          let currViewport = renderingEngine.getViewport(viewportIds[i]);
          let index = currViewport.getCurrentImageIdIndex() + 1;

          //update image index
          let indexElem = document.getElementById(indexMap[currViewport.id])
          indexElem.innerHTML = index
          
        })

        i += 1;
        

        //event listener for selecting a viewport
        item.addEventListener('click', function(){
          selected_viewport = viewportIds[elements.indexOf(item)];
          prev_selected_element.style.borderColor = 'white';
          item.style.borderColor = 'red';
          prev_selected_element = item;
        });

      });

      this.setState({
        reportFrmData: this.generatePatientTable(),
      });
    } catch (error) {
      console.error("Error in componentDidMount:", error);
    }
  }


  ////////////////////////////////////////

  generateReport(data) {
    this.setState({ reportFrmData: data });
  }

  handleClick() {
    const { modal } = this.state;
    this.setState({
      modal: !modal,
    });
  }

  generatePatientTable() {
    let params = new URL(document.location).searchParams;
    const age = params.get("age") ? params.get("age") + "Yr" : "";
    let tableBody = this.companyLogo(current_user);
    tableBody += "<table><tbody>";
    tableBody += "<tr>";
    tableBody += "<td>Patient Name</td><td>" + "NULL" + "</td>";
    tableBody += "<td>Date Of Birth</td><td>" + "NULL" + "</td>";
    tableBody += "</tr>";
    tableBody += "<tr>";
    tableBody += "<td>National Health ID</td><td>" + "NULL" + "</td>";
    tableBody += "<td>Age/Sex</td><td>" + "NULL" + "</td>";
    tableBody += "</tr>";
    tableBody += "<tr>";
    tableBody += "<td>Accession No.</td><td>" + "NULL" + "</td>";
    tableBody += "<td>Referral Dr</td><td>" + " " + "</td>";
    tableBody += "</tr>";
    tableBody += "<tr>";
    tableBody += "<td>Study Date Time</td><td>" + "NULL" + "</td>";
    tableBody += "<td>Report Date Time</td><td>" + "NULL" + "</td>";
    tableBody += "</tr>";
    tableBody += "</tbody>";
    tableBody += "</table>";

    return this.companyLogo(current_user);
  }
  companyLogo(user) {
    return "<img src='" + user.companylogo + "' height='' width='300' />";
  }

  ///////////// Dynamic lists by aman gupta on 07/07/2023 ///////////////
  choose() {
    var list = document.createElement("select");
    list.id = "choose_scan";
    var optionSelect = document.createElement("option");
    optionSelect.value = 0;
    optionSelect.text = "Reporting BOT";
    list.appendChild(optionSelect);
    options.forEach(({ label, id }) => {
      var option = document.createElement("option");
      option.value = id;
      option.text = label;
      list.appendChild(option);
    });
    list.onchange = this.handleSeletion;
    return list;
  }

  actionDropDown() {
    var list = document.createElement("select");
    list.id = "export_data";

    var optionSelect = document.createElement("option");
    optionSelect.value = 0;
    optionSelect.text = "Export Report";
    list.appendChild(optionSelect);

    // Iterate over exportOptions array to create options dynamically
    exportOptions.forEach(({ label, id }) => {
        var option = document.createElement("option");
        option.value = id;
        option.text = label;
        list.appendChild(option);
    });

    list.onchange = this.ActionEvents.bind(this); // bind 'this' to ActionEvents
    return list;
  }

  //Updated copy paste code by Aman Gupta
  copyAction() {
    var btn = document.createElement("a");
    btn.value = "Copy";
    btn.innerHTML = "Copy";
    btn.className = "report-here";
    btn.id = "copy_data";
    btn.addEventListener("click", this.GetCopiedEvents.bind(this));
    return btn;
  }

  GetCopiedEvents(event) {
    var content = document.querySelector(
      "#root > div > div > div.document-editor__editable-container > div"
    );
    content = this.extractContent(content);
    const clipboardItem = new ClipboardItem({
      "text/html": new Blob([content.outerHTML], { type: "text/html" }),
    });
    navigator.clipboard
      .write([clipboardItem])
      .then(() => {
        console.log("Content copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy content to clipboard:", err);
      });
  }

  extractContent(s) {
    var span = document.createElement("span");
    span.innerHTML = s.innerHTML;
    var filterHtml = [...span.getElementsByTagName("table")];
    filterHtml.forEach((child) => {
      child.remove();
    });
    var img = [...span.getElementsByTagName("img")];
    img.forEach((child) => {
      child.remove();
    });

    return span;
  }

  userDropdown() {
    var userDiv = document.createElement("div");
    var current_user = JSON.parse(
      document.getElementById("current-user").textContent
    );
    userDiv.innerHTML = `Welcome <span class='current-user'>${current_user.username}</span>`;
    userDiv.className = "user-name";
    current_user.className = "xyz";

    var logout = document.createElement("a");
    logout.href = "/logout";
    logout.innerHTML = "Logout";

    userDiv.appendChild(logout);
    logout.className = "report-here";

    return userDiv;
  }

  //print function add by Aman Gupta on 28/06/23
  printReport() {
    const data = document.querySelector(".ck-editor__editable");

    if (data !== null) {
      data.classList.add("ck-blurred");
      data.classList.remove("ck-focused");

      // Apply inline CSS styles
      data.style.fontSize = "28px";
      data.style.padding = "6px";

      // Add CSS styles for the table
      const tableStyle = `
        <style>
          table {
            width: 100%;
            border-collapse: collapse;
            table-layout: fixed; /* Added to ensure equal cell sizes */
          }
  
          td {
            border: 1px solid black;
            padding: 2px;
            font-size: 20px;
            width: auto; /* Adjust this value as needed */
          }
        </style>
      `;
      data.innerHTML = tableStyle + data.innerHTML;

      window.print();
    }
  }

  //Aman(searchfield for IDs)

  // createFilename() {
  //   //Aman
  //   const urlSearchParams = new URLSearchParams(window.location.search);
  //   var patientName = document.querySelector(
  //     "#root > div > div > div.document-editor__editable-container > div > figure.table.ck-widget.ck-widget_with-selection-handle > table > tbody > tr:nth-child(1) > td:nth-child(1) > span > strong"
  //   )?.innerHTML;
  //   var PatientId = document.querySelector(
  //     "#root > div > div > div.document-editor__editable-container > div > figure.table.ck-widget.ck-widget_with-selection-handle > table > tbody > tr:nth-child(1) > td:nth-child(2) > span > strong"
  //   )?.innerHTML;
  //   var location = urlSearchParams.get("data-location");
  //   //   filename = ["Patient", "0", "Test", "Date"];
  //   // }
  //   var filename = [patientName, PatientId];
  //   if (
  //     patientName == undefined ||
  //     patientName == null ||
  //     PatientId == undefined
  //   ) {
  //     filename = ["Patient", "0"];
  //   } else {
  //     filename = [
  //       PatientId.replace("Patient ID:", "").replace(" ", "_"),
  //       patientName.replace("Name:", " "),
  //       location,
  //     ];
  //   }

  //   //return filename.join('_').toUpperCase();
  //   filename = filename.filter(Boolean).join("_").toUpperCase();
  //   filename = filename.replace(/^_/, ""); // Remove leading underscore if present
  //   return filename;
  // }

  createFilename() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const patientNameElement = document.querySelector(
      "#root > div > div > div > div.document-editor__editable-container > div > figure.table.ck-widget.ck-widget_with-selection-handle > table > tbody > tr:nth-child(1) > td:nth-child(1) > span > strong"
    );
    const PatientIdElement = document.querySelector(
      "#root > div > div > div > div.document-editor__editable-container > div > figure.table.ck-widget.ck-widget_with-selection-handle > table > tbody > tr:nth-child(1) > td:nth-child(2) > span > strong"
    );
    const patientName = patientNameElement?.innerHTML.trim(); // Trim extra spaces
    const PatientId = PatientIdElement?.innerHTML.trim(); // Trim extra spaces
    const location = urlSearchParams.get("data-location");

    let filename;
    if (!patientName || !PatientId) {
      filename = ["Patient", "0"];
    } else {
      filename = [
        PatientId.replace("Patient ID:", "").replace(" ", "_"),
        patientName.replace("Name:", "").trim(), // Trim extra spaces
        location,
      ];
    }

    // Rest of your code
    filename = filename.filter(Boolean).join("_").toUpperCase();
    filename = filename.replace(/^_/, ""); // Remove leading underscore if present
    return filename;
  }

  getDataUri(url) {
    return new Promise((resolve) => {
      var image = new Image();
      image.setAttribute("crossOrigin", "anonymous"); //getting images from external domain

      image.onload = function () {
        var canvas = document.createElement("canvas");
        canvas.width = this.naturalWidth;
        canvas.height = this.naturalHeight;

        //next three lines for white background in case png has a transparent background
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "#fff"; /// set white fill style
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        canvas.getContext("2d").drawImage(this, 0, 0);

        resolve(canvas.toDataURL("image/jpeg"));
      };

      image.src = url;
    });
  }


///////////////////////////////// Download PDF without Image /////////////////////////////
  GetDivContentOnPDFWithoutImage() {
    const showLoader = () => {
      console.log("Showing loader");
      const loader = document.querySelector(".loader");
      if (loader) {
        loader.style.display = "block";
      }
    };

    const hideLoader = () => {
      console.log("Hiding loader");
      const loader = document.querySelector(".loader");
      if (loader) {
        loader.style.display = "none";
      }
    };
    // Show the loader before starting the PDF generation
    showLoader();
    var filename = this.createFilename();
    const data = document.getElementsByClassName("ck-editor__editable")[0];
    const table = data.querySelector("table");
    data.classList.add("ck-blurred");
    data.classList.remove("ck-focused");
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // Remove the last image element from the capture
    const images = data.querySelectorAll("img");
    if (images.length > 0) {
      const lastImage = images[images.length - 1];
      lastImage.style.display = "none"; // Hide the last image
    }

    if (data != undefined) {
      var a4Width = 595.28; // A4 width in points (1 point = 1/72 inch)
      var a4Height = 841.89; // A4 height in points

      var canvasWidth = a4Width - 40; // Adjusted width to leave some margin

      html2canvas(data, {
        scale: 4, // Adjust the scale if needed for better quality
        windowWidth: document.body.scrollWidth,
        windowHeight: document.body.scrollHeight,
      }).then(async (canvas) => {
        const imgData = canvas.toDataURL("image/png", 1.0);

        // Calculate the height based on the aspect ratio of the captured image
        const canvasHeight = (canvasWidth / canvas.width) * canvas.height;

        // Show the last image again
        if (images.length > 0) {
          const lastImage = images[images.length - 1];
          lastImage.style.display = "block";
        }

        // Hide the loader when the PDF is ready
        hideLoader();

        // Create PDF with only the captured content
        const pdf = new jsPDF("p", "pt", [a4Width, a4Height], true);
        pdf.addImage(imgData, "PNG", 20, 20, canvasWidth, canvasHeight);

        pdf.setTextColor(255, 255, 255);

        // Calculate the position to place the text at the bottom
        const textX = 40;
        const textY = 841.89 - 2; // 20 points from the bottom

        // If a table exists within the ck-editor__editable div, capture its text content
        if (table) {
          const tableText = table.textContent || "";

          // Add the table text as text (preserve original formatting)
          pdf.setFontSize(2); // Adjust the font size as needed
          pdf.text(textX, textY, tableText);
        }

        // Iterate through all paragraphs in the ck-editor__editable div
        const paragraphs = data.querySelectorAll("p");
        paragraphs.forEach((paragraph) => {
          const paragraphText = paragraph.textContent || "";

          // Add each paragraph text as text (preserve original formatting)
          pdf.setFontSize(2); // Adjust the font size as needed
          pdf.text(textX, textY - 2, paragraphText); // Place it above the table text
        });

        // Save the PDF
        pdf.save(filename ? filename + ".pdf" : "download.pdf");

        // Redirect to the previous page after a short delay
        await delay(200);
        window.location.reload(true);
      });
    }
  }

  ////////////////////////////////// Another one upgraded on 05/01/2024 ////////////////////////
  GetDivContentOnPDF() {
    const showLoader = () => {
      console.log("Showing loader");
      const loader = document.querySelector(".loader");
      if (loader) {
        loader.style.display = "block";
      }
    };

    const hideLoader = () => {
      console.log("Hiding loader");
      const loader = document.querySelector(".loader");
      if (loader) {
        loader.style.display = "none";
      }
    };
    // Show the loader before starting the PDF generation
    showLoader();
    var filename = this.createFilename();
    const data = document.getElementsByClassName("ck-editor__editable")[0];
    const table = data.querySelector("table");
    data.classList.add("ck-blurred");
    data.classList.remove("ck-focused");
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    if (data != undefined) {
      // Create a new jsPDF instance
      const pdf = new jsPDF("p", "pt", [595.28, 841.89], true); // A4 dimensions

      // Capture the entire content, including text and images
      html2canvas(data, {
        scale: 2, // Adjust the scale if needed for better image quality
        useCORS: true, // Added to address potential CORS issues
      }).then(async (canvas) => {
        const imgData = canvas.toDataURL("image/png", 1.0);

        // Calculate the position to center the image
        const imgWidth = 595.28 - 40; // Adjusted width to leave some margin
        const imgHeight = imgWidth * 1.5 - 40; // Adjusted height to maintain aspect ratio and leave margin
        const imgX = (595.28 - imgWidth) / 2;
        const imgY = (841.89 - imgHeight) / 2;

        // Hide the loader when the PDF is ready
        hideLoader();
        // Add the image to the PDF
        pdf.addImage(imgData, "PNG", imgX, imgY, imgWidth, imgHeight);
        pdf.setTextColor(255, 255, 255);
        // Calculate the position to place the text at the bottom
        const textX = 40;
        const textY = 841.89 - 2; // 20 points from the bottom

        // If a table exists within the ck-editor__editable div, capture its text content
        if (table) {
          const tableText = table.textContent || "";

          // Add the table text as text (preserve original formatting)
          pdf.setFontSize(2); // Adjust the font size as needed
          pdf.text(textX, textY, tableText);
        }

        // If the ck-editor__editable div contains paragraphs, capture the text from the first paragraph
        const paragraphs = data.querySelectorAll("p");
        paragraphs.forEach((paragraph) => {
          const paragraphText = paragraph.textContent || "";

          // Add each paragraph text as text (preserve original formatting)
          pdf.setFontSize(2); // Adjust the font size as needed
          pdf.text(textX, textY - 2, paragraphText); // Place it above the table text
        });

        // Save the PDF
        pdf.save(filename ? filename + ".pdf" : "download.pdf");

        // Redirect to the previous page after a short delay
        await delay(200);
        window.location.reload(true);
      });
    }
  }

  //***************************************************************** pdf for ECG */

  GetEcgContentOnPDF() {
    const showLoader = () => {
      console.log("Showing loader");
      const loader = document.querySelector(".loader");
      if (loader) {
        loader.style.display = "block";
      }
    };

    const hideLoader = () => {
      console.log("Hiding loader");
      const loader = document.querySelector(".loader");
      if (loader) {
        loader.style.display = "none";
      }
    };
    // Show the loader before starting the PDF generation
    showLoader();
    const filename = this.createFilename();
    const data = document.getElementsByClassName("ck-editor__editable")[0];
    const table = data.querySelector("table");
    data.classList.add("ck-blurred");
    data.classList.remove("ck-focused");

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // Create a function to load images and render PDF
    const loadImageAndRenderPDF = async () => {
      try {
        let graphSrc = Array.from(data.children).pop().children[0].currentSrc;
        let graphElement = document.querySelector(
          "figure.image:nth-last-of-type(1)"
        );
        graphElement.remove();

        if (data != undefined) {
          var a4Width = 595.28; // A4 width in points (1 point = 1/72 inch)
          var a4Height = 841.89; // A4 height in points

          var canvasWidth = a4Width; // Adjusted width to leave some margin
          var canvasHeight = a4Height; // Adjusted height to maintain aspect ratio and leave margin

          const canvas = await html2canvas(data, {
            scale: 2, // Adjust the scale if needed for better quality
            useCORS: true, // Enable CORS to capture images from external URLs
          });

          const imgData = canvas.toDataURL("image/png", 1.0);
          const pdf = new jsPDF("p", "pt", [a4Width, a4Height], true);

          // Calculate the image dimensions to fit within the PDF dimensions
          const canvasAspectRatio = canvas.width / canvas.height;
          const pdfAspectRatio = a4Width / a4Height;

          let pdfImageWidth = canvasWidth;
          let pdfImageHeight = canvasHeight;

          if (canvasAspectRatio > pdfAspectRatio) {
            pdfImageWidth = canvasWidth;
            pdfImageHeight = canvasWidth / canvasAspectRatio;
          } else {
            pdfImageHeight = canvasHeight;
            pdfImageWidth = canvasHeight * canvasAspectRatio;
          }

          // Calculate the positioning to center the image
          const xPosition = (pdf.internal.pageSize.width - pdfImageWidth) / 2;
          const yPosition = (pdf.internal.pageSize.height - pdfImageHeight) / 2;

          // Create a separate canvas for the rotated graph image
          const graphCanvas = document.createElement("canvas");
          graphCanvas.width = 1024;
          graphCanvas.height = 1024;
          const graphCtx = graphCanvas.getContext("2d");
          let graphImg = await this.getDataUri(graphSrc);
          const image = new Image();
          image.src = graphImg;

          await new Promise((resolve) => {
            image.onload = resolve;
          });

          graphCtx.translate(graphCanvas.width / 2, graphCanvas.height / 2);
          graphCtx.rotate(Math.PI / 2); // Rotate the image by 90 degrees
          graphCtx.drawImage(
            image,
            -graphCanvas.height / 2,
            -graphCanvas.width / 2,
            graphCanvas.height,
            graphCanvas.width
          );

          pdf.addImage(
            graphCanvas.toDataURL("image/png"),
            "PNG",
            0,
            0,
            a4Width,
            a4Height
          );

          pdf.addPage("a4", "portrait"); // Add a new portrait-oriented page
          pdf.addImage(
            imgData,
            "PNG",
            xPosition,
            yPosition,
            pdfImageWidth,
            pdfImageHeight
          );

          pdf.setTextColor(255, 255, 255);

          // Calculate the position to place the text at the bottom
          const textX = 40;
          const textY = 841.89 - 2; // 20 points from the bottom

          // If a table exists within the ck-editor__editable div, capture its text content
          if (table) {
            const tableText = table.textContent || "";

            // Add the table text as text (preserve original formatting)
            pdf.setFontSize(2); // Adjust the font size as needed
            pdf.text(textX, textY, tableText);
          }

          // Iterate through all paragraphs in the ck-editor__editable div
          const paragraphs = data.querySelectorAll("p");
          paragraphs.forEach((paragraph) => {
            const paragraphText = paragraph.textContent || "";

            // Add each paragraph text as text (preserve original formatting)
            pdf.setFontSize(2); // Adjust the font size as needed
            pdf.text(textX, textY - 2, paragraphText); // Place it above the table text
          });
          // Hide the loader when the PDF is ready
          hideLoader();
          // Save the PDF
          pdf.save(filename ? filename + ".pdf" : "download.pdf");

          // Get the previous page URL
          const previousPageURL = document.referrer;

          // Redirect to the previous page after a short delay
          await delay(500); // Adjust the delay as needed
          window.location.replace(previousPageURL);

          // Reload the current page after another delay
          await delay(200); // Adjust the delay as needed
          window.location.reload(true);
        }
      } catch (error) {
        console.error("Error generating PDF:", error);
      }
    };

    loadImageAndRenderPDF();
  }

  

  ////////////////////////////////////////////////////////////////////////// UPLOAD ECG PDF //////////////////////////////////////////////////////////////////////////
  uploadEcgPDF = async () => {
    const showLoader = () => {
      console.log("Showing loader");
      const loader = document.querySelector(".loader");
      if (loader) {
        loader.style.display = "block";
      }
    };

    const hideLoader = () => {
      console.log("Hiding loader");
      const loader = document.querySelector(".loader");
      if (loader) {
        loader.style.display = "none";
      }
    };

    const extractDataFromURL = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const patientId = urlParams.get("data-patientid");
      const patientName = urlParams.get("data-patientname");
      const testDate = urlParams.get("data-testdate");
      const reportDate = urlParams.get("data-reportdate");
      const location = urlParams.get("data-location");

      return { patientId, patientName, testDate, reportDate, location };
    };

    const showNotification = (message) => {
      const notification = document.getElementById("notification");
      const notificationText = document.getElementById("notification-text");

      if (notification && notificationText) {
        notificationText.innerText = message;
        notification.style.display = "block";

        // Hide the notification after 3 seconds (adjust the delay as needed)
        setTimeout(() => {
          notification.style.display = "none";
        }, 1000);
      }
    };

    const getCSRFToken = async () => {
      try {
        const response = await fetch("/get-csrf-token/");
        const data = await response.json();
        return data.csrf_token;
      } catch (error) {
        console.error("Error fetching CSRF token:", error);
        throw error;
      }
    };

    // Show the loader before starting the PDF generation
    showLoader();
    const filename = this.createFilename();
    const data = document.getElementsByClassName("ck-editor__editable")[0];
    const table = data.querySelector("table");
    data.classList.add("ck-blurred");
    data.classList.remove("ck-focused");
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // Create a function to load images and render PDF
    const loadImageAndRenderPDF = async () => {
      try {
        let graphSrc = Array.from(data.children).pop().children[0].currentSrc;
        let graphElement = document.querySelector(
          "figure.image:nth-last-of-type(1)"
        );
        graphElement.remove();

        if (data != undefined) {
          var a4Width = 595.28; // A4 width in points (1 point = 1/72 inch)
          var a4Height = 841.89; // A4 height in points

          var canvasWidth = a4Width; // Adjusted width to leave some margin
          var canvasHeight = a4Height; // Adjusted height to maintain aspect ratio and leave margin

          const canvas = await html2canvas(data, {
            scale: 2, // Adjust the scale if needed for better quality
            useCORS: true, // Enable CORS to capture images from external URLs
          });

          const imgData = canvas.toDataURL("image/png", 1.0);
          const pdf = new jsPDF("p", "pt", [a4Width, a4Height], true);

          // Calculate the image dimensions to fit within the PDF dimensions
          const canvasAspectRatio = canvas.width / canvas.height;
          const pdfAspectRatio = a4Width / a4Height;

          let pdfImageWidth = canvasWidth;
          let pdfImageHeight = canvasHeight;

          if (canvasAspectRatio > pdfAspectRatio) {
            pdfImageWidth = canvasWidth;
            pdfImageHeight = canvasWidth / canvasAspectRatio;
          } else {
            pdfImageHeight = canvasHeight;
            pdfImageWidth = canvasHeight * canvasAspectRatio;
          }

          // Calculate the positioning to center the image
          const xPosition = (pdf.internal.pageSize.width - pdfImageWidth) / 2;
          const yPosition = (pdf.internal.pageSize.height - pdfImageHeight) / 2;

          // Create a separate canvas for the rotated graph image
          const graphCanvas = document.createElement("canvas");
          graphCanvas.width = 1024;
          graphCanvas.height = 1024;
          const graphCtx = graphCanvas.getContext("2d");
          let graphImg = await this.getDataUri(graphSrc);
          const image = new Image();
          image.src = graphImg;

          await new Promise((resolve) => {
            image.onload = resolve;
          });

          graphCtx.translate(graphCanvas.width / 2, graphCanvas.height / 2);
          graphCtx.rotate(Math.PI / 2); // Rotate the image by 90 degrees
          graphCtx.drawImage(
            image,
            -graphCanvas.height / 2,
            -graphCanvas.width / 2,
            graphCanvas.height,
            graphCanvas.width
          );

          pdf.addImage(
            graphCanvas.toDataURL("image/png"),
            "PNG",
            0,
            0,
            a4Width,
            a4Height
          );

          pdf.addPage("a4", "portrait"); // Add a new portrait-oriented page
          pdf.addImage(
            imgData,
            "PNG",
            xPosition,
            yPosition,
            pdfImageWidth,
            pdfImageHeight
          );

          pdf.setTextColor(255, 255, 255);

          // Calculate the position to place the text at the bottom
          const textX = 40;
          const textY = 841.89 - 2; // 20 points from the bottom

          // If a table exists within the ck-editor__editable div, capture its text content
          if (table) {
            const tableText = table.textContent || "";

            // Add the table text as text (preserve original formatting)
            pdf.setFontSize(2); // Adjust the font size as needed
            pdf.text(textX, textY, tableText);
          }

          // Iterate through all paragraphs in the ck-editor__editable div
          const paragraphs = data.querySelectorAll("p");
          paragraphs.forEach((paragraph) => {
            const paragraphText = paragraph.textContent || "";

            // Add each paragraph text as text (preserve original formatting)
            pdf.setFontSize(2); // Adjust the font size as needed
            pdf.text(textX, textY - 2, paragraphText); // Place it above the table text
          });

          // Convert the PDF to a Blob
          const pdfBlob = pdf.output("blob");

          // Extract data from URL
          const { patientId, patientName, testDate, reportDate, location } =
            extractDataFromURL();

          // Send the FormData to Django backend using fetch
          const csrfToken = await getCSRFToken();
          console.log("CSRF Token:", csrfToken);

          // Create FormData and append the PDF Blob
          const formData = new FormData();
          formData.append(
            "pdf",
            pdfBlob,
            filename ? filename + ".pdf" : "download.pdf"
          );
          formData.append("patientId", patientId);
          formData.append("patientName", patientName);
          formData.append("testDate", testDate);
          formData.append("reportDate", reportDate);
          formData.append("location", location);

          console.log("FormData:", formData);

          try {
            const response = await axios.post("/upload_ecg_pdf/", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
                "X-CSRFToken": csrfToken,
              },
            });

            console.log(
              "PDF successfully sent to Django backend.",
              response.data
            );
            // Hide the loader when the PDF is ready
            hideLoader();
            // Show the success notification
            showNotification("PDF successfully uploaded!");
          } catch (error) {
            console.error("Error sending PDF to Django backend.", error);
            // Show the error notification
            showNotification("Error uploading PDF. Please try again.");
          }

          //alert("Report Uploaded successfully!");

          // Save the current URL before going back in the history
          const currentURL = window.location.href;

          // Redirect to the previous page after a short delay
          await delay(200);

          // Navigate back to the previous page with a cache-busting query parameter
          window.location.href = document.referrer + "?nocache=" + Date.now();

          // Listen for the popstate event to know when the history state changes
          window.addEventListener("popstate", () => {
            // Check if the URL has changed
            if (window.location.href !== currentURL) {
              // Reload the current page after a short delay
              setTimeout(() => {
                window.location.reload(true);
              }, 200);
            }
          });
        }
      } catch (error) {
        console.error("Error generating PDF:", error);
        // Hide the loader when the PDF is ready
      }
    };

    loadImageAndRenderPDF();
  };
  //***************************************///////////////////// upload ECG pdf to database (END) ///////////////**********************************************/

  ////////////////////////////////////////////////////////////////////////// UPLOAD XRAY PDF //////////////////////////////////////////////////////////////////////////
  uploadXrayPDF = async () => {
    const showLoader = () => {
      console.log("Showing loader");
      const loader = document.querySelector(".loader");
      if (loader) {
        loader.style.display = "block";
      }
    };

    const hideLoader = () => {
      console.log("Hiding loader");
      const loader = document.querySelector(".loader");
      if (loader) {
        loader.style.display = "none";
      }
    };

    const extractDataFromURL = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const patientId = urlParams.get("data-patientid");
      const patientName = urlParams.get("data-patientname");
      const testDate = urlParams.get("data-testdate");
      const reportDate = urlParams.get("data-reportdate");
      const location = urlParams.get("data-location");

      return { patientId, patientName, testDate, reportDate, location };
    };

    const showNotification = (message) => {
      const notification = document.getElementById("notification");
      const notificationText = document.getElementById("notification-text");

      if (notification && notificationText) {
        notificationText.innerText = message;
        notification.style.display = "block";

        // Hide the notification after 3 seconds (adjust the delay as needed)
        setTimeout(() => {
          notification.style.display = "none";
        }, 1000);
      }
    };

    const getCSRFToken = async () => {
      try {
        const response = await fetch("/get-csrf-token/");
        const data = await response.json();
        return data.csrf_token;
      } catch (error) {
        console.error("Error fetching CSRF token:", error);
        throw error;
      }
    };

    // Show the loader before starting the PDF generation
    showLoader();
    const filename = this.createFilename();
    const data = document.getElementsByClassName("ck-editor__editable")[0];
    const table = data.querySelector("table");
    data.classList.add("ck-blurred");
    data.classList.remove("ck-focused");
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // Create a function to load images and render PDF
    const loadImageAndRenderPDF = async () => {
      try {
        let graphSrc = Array.from(data.children).pop().children[0].currentSrc;
        let graphElement = document.querySelector(
          "figure.image:nth-last-of-type(1)"
        );
        graphElement.remove();

        if (data != undefined) {
          var a4Width = 595.28; // A4 width in points (1 point = 1/72 inch)
          var a4Height = 841.89; // A4 height in points

          var canvasWidth = a4Width; // Adjusted width to leave some margin
          var canvasHeight = a4Height; // Adjusted height to maintain aspect ratio and leave margin

          const canvas = await html2canvas(data, {
            scale: 2, // Adjust the scale if needed for better quality
            useCORS: true, // Enable CORS to capture images from external URLs
          });

          const imgData = canvas.toDataURL("image/png", 1.0);
          const pdf = new jsPDF("p", "pt", [a4Width, a4Height], true);

          // Calculate the image dimensions to fit within the PDF dimensions
          const canvasAspectRatio = canvas.width / canvas.height;
          const pdfAspectRatio = a4Width / a4Height;

          let pdfImageWidth = canvasWidth;
          let pdfImageHeight = canvasHeight;

          if (canvasAspectRatio > pdfAspectRatio) {
            pdfImageWidth = canvasWidth;
            pdfImageHeight = canvasWidth / canvasAspectRatio;
          } else {
            pdfImageHeight = canvasHeight;
            pdfImageWidth = canvasHeight * canvasAspectRatio;
          }

          // Calculate the positioning to center the image
          const xPosition = (pdf.internal.pageSize.width - pdfImageWidth) / 2;
          const yPosition = (pdf.internal.pageSize.height - pdfImageHeight) / 2;

          // Create a separate canvas for the rotated graph image
          const graphCanvas = document.createElement("canvas");
          graphCanvas.width = 1024;
          graphCanvas.height = 1024;
          const graphCtx = graphCanvas.getContext("2d");
          let graphImg = await this.getDataUri(graphSrc);
          const image = new Image();
          image.src = graphImg;

          await new Promise((resolve) => {
            image.onload = resolve;
          });

          graphCtx.translate(graphCanvas.width / 2, graphCanvas.height / 2);
          graphCtx.rotate(Math.PI / 2); // Rotate the image by 90 degrees
          graphCtx.drawImage(
            image,
            -graphCanvas.height / 2,
            -graphCanvas.width / 2,
            graphCanvas.height,
            graphCanvas.width
          );

          pdf.addImage(
            graphCanvas.toDataURL("image/png"),
            "PNG",
            0,
            0,
            a4Width,
            a4Height
          );

          pdf.addPage("a4", "portrait"); // Add a new portrait-oriented page
          pdf.addImage(
            imgData,
            "PNG",
            xPosition,
            yPosition,
            pdfImageWidth,
            pdfImageHeight
          );

          pdf.setTextColor(255, 255, 255);

          // Calculate the position to place the text at the bottom
          const textX = 40;
          const textY = 841.89 - 2; // 20 points from the bottom

          // If a table exists within the ck-editor__editable div, capture its text content
          if (table) {
            const tableText = table.textContent || "";

            // Add the table text as text (preserve original formatting)
            pdf.setFontSize(2); // Adjust the font size as needed
            pdf.text(textX, textY, tableText);
          }

          // Iterate through all paragraphs in the ck-editor__editable div
          const paragraphs = data.querySelectorAll("p");
          paragraphs.forEach((paragraph) => {
            const paragraphText = paragraph.textContent || "";

            // Add each paragraph text as text (preserve original formatting)
            pdf.setFontSize(2); // Adjust the font size as needed
            pdf.text(textX, textY - 2, paragraphText); // Place it above the table text
          });

          // Convert the PDF to a Blob
          const pdfBlob = pdf.output("blob");

          // Extract data from URL
          const { patientId, patientName, testDate, reportDate, location } =
            extractDataFromURL();

          // Send the FormData to Django backend using fetch
          const csrfToken = await getCSRFToken();
          console.log("CSRF Token:", csrfToken);

          // Create FormData and append the PDF Blob
          const formData = new FormData();
          formData.append(
            "pdf",
            pdfBlob,
            filename ? filename + ".pdf" : "download.pdf"
          );
          formData.append("patientId", patientId);
          formData.append("patientName", patientName);
          formData.append("testDate", testDate);
          formData.append("reportDate", reportDate);
          formData.append("location", location);

          console.log("FormData:", formData);

          try {
            const response = await axios.post("/upload_xray_pdf/", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
                "X-CSRFToken": csrfToken,
              },
            });

            console.log(
              "PDF successfully sent to Django backend.",
              response.data
            );
            // Hide the loader when the PDF is ready
            hideLoader();
            // Show the success notification
            showNotification("PDF successfully uploaded!");
          } catch (error) {
            console.error("Error sending PDF to Django backend.", error);
            // Show the error notification
            showNotification("Error uploading PDF. Please try again.");
          }

          // Save the current URL before going back in the history
          const currentURL = window.location.href;

          // Redirect to the previous page after a short delay
          await delay(200);

          // Navigate back to the previous page with a cache-busting query parameter
          window.location.href = document.referrer + "?nocache=" + Date.now();

          // Listen for the popstate event to know when the history state changes
          window.addEventListener("popstate", () => {
            // Check if the URL has changed
            if (window.location.href !== currentURL) {
              // Reload the current page after a short delay
              setTimeout(() => {
                window.location.reload(true);
              }, 200);
            }
          });
        }
      } catch (error) {
        console.error("Error generating PDF:", error);
        // Hide the loader when the PDF is ready
      }
    };

    loadImageAndRenderPDF();
  };
  //***************************************///////////////////// upload split XRAY pdf to database (END) ///////////////**********************************************/

////////////////////////////////// Upload XRAY PDF without IMAGE (START) ////////////////////////
  UploadDivContentOnPDFWithoutImage() {
    const showLoader = () => {
      console.log("Showing loader");
      const loader = document.querySelector(".loader");
      if (loader) {
        loader.style.display = "block";
      }
    };

    const hideLoader = () => {
      console.log("Hiding loader");
      const loader = document.querySelector(".loader");
      if (loader) {
        loader.style.display = "none";
      }
    };

    const extractDataFromURL = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const patientId = urlParams.get("data-patientid");
      const patientName = urlParams.get("data-patientname");
      const testDate = urlParams.get("data-testdate");
      const reportDate = urlParams.get("data-reportdate");
      const location = urlParams.get("data-location");

      return { patientId, patientName, testDate, reportDate, location };
    };

    const showNotification = (message) => {
      const notification = document.getElementById("notification");
      const notificationText = document.getElementById("notification-text");

      if (notification && notificationText) {
        notificationText.innerText = message;
        notification.style.display = "block";

        // Hide the notification after 3 seconds (adjust the delay as needed)
        setTimeout(() => {
          notification.style.display = "none";
        }, 1000);
      }
    };

    const getCSRFToken = async () => {
      try {
        const response = await fetch("/get-csrf-token/");
        const data = await response.json();
        return data.csrf_token;
      } catch (error) {
        console.error("Error fetching CSRF token:", error);
        throw error;
      }
    };
    // Show the loader before starting the PDF generation
    showLoader();
    var filename = this.createFilename();
    const data = document.getElementsByClassName("ck-editor__editable")[0];
    const table = data.querySelector("table");
    data.classList.add("ck-blurred");
    data.classList.remove("ck-focused");
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // Remove the last image element from the capture
    const images = data.querySelectorAll("img");
    if (images.length > 0) {
      const lastImage = images[images.length - 1];
      lastImage.style.display = "none"; // Hide the last image
    }

    if (data != undefined) {
      var a4Width = 595.28; // A4 width in points (1 point = 1/72 inch)
      var a4Height = 841.89; // A4 height in points

      var canvasWidth = a4Width - 40; // Adjusted width to leave some margin

      html2canvas(data, {
        scale: 4, // Adjust the scale if needed for better quality
        windowWidth: document.body.scrollWidth,
        windowHeight: document.body.scrollHeight,
      }).then(async (canvas) => {
        const imgData = canvas.toDataURL("image/png", 1.0);

        // Calculate the height based on the aspect ratio of the captured image
        const canvasHeight = (canvasWidth / canvas.width) * canvas.height;

        // Show the last image again
        if (images.length > 0) {
          const lastImage = images[images.length - 1];
          lastImage.style.display = "block";
        }

        // Hide the loader when the PDF is ready
        hideLoader();

        // Create PDF with only the captured content
        const pdf = new jsPDF("p", "pt", [a4Width, a4Height], true);
        pdf.addImage(imgData, "PNG", 20, 20, canvasWidth, canvasHeight);

        pdf.setTextColor(255, 255, 255);

        // Calculate the position to place the text at the bottom
        const textX = 40;
        const textY = 841.89 - 2; // 20 points from the bottom

        // If a table exists within the ck-editor__editable div, capture its text content
        if (table) {
          const tableText = table.textContent || "";

          // Add the table text as text (preserve original formatting)
          pdf.setFontSize(2); // Adjust the font size as needed
          pdf.text(textX, textY, tableText);
        }

        // Iterate through all paragraphs in the ck-editor__editable div
        const paragraphs = data.querySelectorAll("p");
        paragraphs.forEach((paragraph) => {
          const paragraphText = paragraph.textContent || "";

          // Add each paragraph text as text (preserve original formatting)
          pdf.setFontSize(2); // Adjust the font size as needed
          pdf.text(textX, textY - 2, paragraphText); // Place it above the table text
        });

        // Convert the PDF to a Blob
        const pdfBlob = pdf.output("blob");

        // Extract data from URL
        const { patientId, patientName, testDate, reportDate, location } =
          extractDataFromURL();

        // Send the FormData to Django backend using fetch
        const csrfToken = await getCSRFToken();
        console.log("CSRF Token:", csrfToken);

        // Create FormData and append the PDF Blob
        const formData = new FormData();
        formData.append(
          "pdf",
          pdfBlob,
          filename ? filename + ".pdf" : "download.pdf"
        );
        formData.append("patientId", patientId);
        formData.append("patientName", patientName);
        formData.append("testDate", testDate);
        formData.append("reportDate", reportDate);
        formData.append("location", location);

        console.log("FormData:", formData);

        try {
          const response = await axios.post("/upload_xray_pdf/", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              "X-CSRFToken": csrfToken,
            },
          });

          console.log(
            "PDF successfully sent to Django backend.",
            response.data
          );
          // Hide the loader when the PDF is ready
          hideLoader();
          // Show the success notification
          showNotification("PDF successfully uploaded!");
        } catch (error) {
          console.error("Error sending PDF to Django backend.", error);
          // Show the error notification
          showNotification("Error uploading PDF. Please try again.");
        }

        // Save the current URL before going back in the history
        const currentURL = window.location.href;

        // Redirect to the previous page after a short delay
        await delay(200);

        // Navigate back to the previous page with a cache-busting query parameter
        window.location.href = document.referrer + "?nocache=" + Date.now();

        // Listen for the popstate event to know when the history state changes
        window.addEventListener("popstate", () => {
          // Check if the URL has changed
          if (window.location.href !== currentURL) {
            // Reload the current page after a short delay
            setTimeout(() => {
              window.location.reload(true);
            }, 200);
          }
        });
      });
    }
  }
  ////////////////////////////////// Upload XRAY PDF without IMAGE (END) ////////////////////////


  ////////////////////////////////// Upload XRAY PDF with IMAGE (START) ////////////////////////
  UploadDivContentOnPDF() {
    const showLoader = () => {
      console.log("Showing loader");
      const loader = document.querySelector(".loader");
      if (loader) {
        loader.style.display = "block";
      }
    };

    const hideLoader = () => {
      console.log("Hiding loader");
      const loader = document.querySelector(".loader");
      if (loader) {
        loader.style.display = "none";
      }
    };

    const extractDataFromURL = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const patientId = urlParams.get("data-patientid");
      const patientName = urlParams.get("data-patientname");
      const testDate = urlParams.get("data-testdate");
      const reportDate = urlParams.get("data-reportdate");
      const location = urlParams.get("data-location");

      return { patientId, patientName, testDate, reportDate, location };
    };

    const showNotification = (message) => {
      const notification = document.getElementById("notification");
      const notificationText = document.getElementById("notification-text");

      if (notification && notificationText) {
        notificationText.innerText = message;
        notification.style.display = "block";

        // Hide the notification after 3 seconds (adjust the delay as needed)
        setTimeout(() => {
          notification.style.display = "none";
        }, 1000);
      }
    };

    const getCSRFToken = async () => {
      try {
        const response = await fetch("/get-csrf-token/");
        const data = await response.json();
        return data.csrf_token;
      } catch (error) {
        console.error("Error fetching CSRF token:", error);
        throw error;
      }
    };
    // Show the loader before starting the PDF generation
    showLoader();
    var filename = this.createFilename();
    const data = document.getElementsByClassName("ck-editor__editable")[0];
    const table = data.querySelector("table");
    data.classList.add("ck-blurred");
    data.classList.remove("ck-focused");
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    if (data != undefined) {
      // Create a new jsPDF instance
      const pdf = new jsPDF("p", "pt", [595.28, 841.89], true); // A4 dimensions

      // Capture the entire content, including text and images
      html2canvas(data, {
        scale: 2, // Adjust the scale if needed for better image quality
        useCORS: true, // Added to address potential CORS issues
      }).then(async (canvas) => {
        const imgData = canvas.toDataURL("image/png", 1.0);

        // Calculate the position to center the image
        const imgWidth = 595.28 - 40; // Adjusted width to leave some margin
        const imgHeight = imgWidth * 1.5 - 40; // Adjusted height to maintain aspect ratio and leave margin
        const imgX = (595.28 - imgWidth) / 2;
        const imgY = (841.89 - imgHeight) / 2;

        // Hide the loader when the PDF is ready
        hideLoader();
        // Add the image to the PDF
        pdf.addImage(imgData, "PNG", imgX, imgY, imgWidth, imgHeight);
        pdf.setTextColor(255, 255, 255);
        // Calculate the position to place the text at the bottom
        const textX = 40;
        const textY = 841.89 - 2; // 20 points from the bottom

        // If a table exists within the ck-editor__editable div, capture its text content
        if (table) {
          const tableText = table.textContent || "";

          // Add the table text as text (preserve original formatting)
          pdf.setFontSize(2); // Adjust the font size as needed
          pdf.text(textX, textY, tableText);
        }

        // If the ck-editor__editable div contains paragraphs, capture the text from the first paragraph
        const paragraphs = data.querySelectorAll("p");
        paragraphs.forEach((paragraph) => {
          const paragraphText = paragraph.textContent || "";

          // Add each paragraph text as text (preserve original formatting)
          pdf.setFontSize(2); // Adjust the font size as needed
          pdf.text(textX, textY - 2, paragraphText); // Place it above the table text
        });

        // Convert the PDF to a Blob
        const pdfBlob = pdf.output("blob");

        // Extract data from URL
        const { patientId, patientName, testDate, reportDate, location } =
          extractDataFromURL();

        // Send the FormData to Django backend using fetch
        const csrfToken = await getCSRFToken();
        console.log("CSRF Token:", csrfToken);

        // Create FormData and append the PDF Blob
        const formData = new FormData();
        formData.append(
          "pdf",
          pdfBlob,
          filename ? filename + ".pdf" : "download.pdf"
        );
        formData.append("patientId", patientId);
        formData.append("patientName", patientName);
        formData.append("testDate", testDate);
        formData.append("reportDate", reportDate);
        formData.append("location", location);

        console.log("FormData:", formData);

        try {
          const response = await axios.post("/upload_xray_pdf/", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              "X-CSRFToken": csrfToken,
            },
          });

          console.log(
            "PDF successfully sent to Django backend.",
            response.data
          );
          // Hide the loader when the PDF is ready
          hideLoader();
          // Show the success notification
          showNotification("PDF successfully uploaded!");
        } catch (error) {
          console.error("Error sending PDF to Django backend.", error);
          // Show the error notification
          showNotification("Error uploading PDF. Please try again.");
        }

        // Save the current URL before going back in the history
        const currentURL = window.location.href;

        // Redirect to the previous page after a short delay
        await delay(200);

        // Navigate back to the previous page with a cache-busting query parameter
        window.location.href = document.referrer + "?nocache=" + Date.now();

        // Listen for the popstate event to know when the history state changes
        window.addEventListener("popstate", () => {
          // Check if the URL has changed
          if (window.location.href !== currentURL) {
            // Reload the current page after a short delay
            setTimeout(() => {
              window.location.reload(true);
            }, 200);
          }
        });
      });
    }
  }

  //////////////////// Upload XRAY PDF with IMAGE (END) ////////////////////////////////////


  ////////////////////////////////// Upload VITALS PDF without IMAGE (START) ////////////////////////
  UploadDivContentOnPDFVitals() {
    const showLoader = () => {
      console.log("Showing loader");
      const loader = document.querySelector(".loader");
      if (loader) {
        loader.style.display = "block";
      }
    };

    const hideLoader = () => {
      console.log("Hiding loader");
      const loader = document.querySelector(".loader");
      if (loader) {
        loader.style.display = "none";
      }
    };

    const extractDataFromURL = () => {
      const patientId = document.querySelector(
        "#root > div > div > div.document-editor__editable-container > div > figure.table.ck-widget.ck-widget_with-selection-handle > table > tbody > tr:nth-child(1) > td:nth-child(2) > span > strong"
      )?.innerHTML;
      const patientName = document.querySelector(
        "#root > div > div > div.document-editor__editable-container > div > figure.table.ck-widget.ck-widget_with-selection-handle > table > tbody > tr:nth-child(1) > td:nth-child(1) > span > strong"
      )?.innerHTML;
      const testDate = document.querySelector(
        "#root > div > div > div.document-editor__editable-container > div > figure.table.ck-widget.ck-widget_with-selection-handle > table > tbody > tr:nth-child(2) > td:nth-child(2) > span > strong"
      )?.innerHTML;
      const reportDate = document.querySelector(
        "#root > div > div > div.document-editor__editable-container > div > figure.table.ck-widget.ck-widget_with-selection-handle > table > tbody > tr:nth-child(2) > td:nth-child(3) > span > strong"
      )?.innerHTML;

      return { patientId, patientName, testDate, reportDate };
    };

    const showNotification = (message) => {
      const notification = document.getElementById("notification");
      const notificationText = document.getElementById("notification-text");

      if (notification && notificationText) {
        notificationText.innerText = message;
        notification.style.display = "block";

        // Hide the notification after 3 seconds (adjust the delay as needed)
        setTimeout(() => {
          notification.style.display = "none";
        }, 1000);
      }
    };

    const getCSRFToken = async () => {
      try {
        const response = await fetch("/get-csrf-token/");
        const data = await response.json();
        return data.csrf_token;
      } catch (error) {
        console.error("Error fetching CSRF token:", error);
        throw error;
      }
    };
    // Show the loader before starting the PDF generation
    showLoader();
    var filename = this.createFilename();
    const data = document.getElementsByClassName("ck-editor__editable")[0];
    const table = data.querySelector("table");
    data.classList.add("ck-blurred");
    data.classList.remove("ck-focused");
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    if (data != undefined) {
      var a4Width = 595.28; // A4 width in points (1 point = 1/72 inch)
      var a4Height = 841.89; // A4 height in points

      var canvasWidth = a4Width - 40; // Adjusted width to leave some margin

      html2canvas(data, {
        scale: 4, // Adjust the scale if needed for better quality
        windowWidth: document.body.scrollWidth,
        windowHeight: document.body.scrollHeight,
      }).then(async (canvas) => {
        const imgData = canvas.toDataURL("image/png", 1.0);

        // Calculate the height based on the aspect ratio of the captured image
        const canvasHeight = (canvasWidth / canvas.width) * canvas.height;

        // Hide the loader when the PDF is ready
        hideLoader();

        // Create PDF with only the captured content
        const pdf = new jsPDF("p", "pt", [a4Width, a4Height], true);
        pdf.addImage(imgData, "PNG", 20, 20, canvasWidth, canvasHeight);

        pdf.setTextColor(255, 255, 255);

        // Calculate the position to place the text at the bottom
        const textX = 40;
        const textY = 841.89 - 2; // 20 points from the bottom

        // If a table exists within the ck-editor__editable div, capture its text content
        if (table) {
          const tableText = table.textContent || "";

          // Add the table text as text (preserve original formatting)
          pdf.setFontSize(2); // Adjust the font size as needed
          pdf.text(textX, textY, tableText);
        }

        // Iterate through all paragraphs in the ck-editor__editable div
        const paragraphs = data.querySelectorAll("p");
        paragraphs.forEach((paragraph) => {
          const paragraphText = paragraph.textContent || "";

          // Add each paragraph text as text (preserve original formatting)
          pdf.setFontSize(2); // Adjust the font size as needed
          pdf.text(textX, textY - 2, paragraphText); // Place it above the table text
        });

        // Convert the PDF to a Blob
        const pdfBlob = pdf.output("blob");

        // Extract data from URL
        const { patientId, patientName, testDate, reportDate } =
          extractDataFromURL();

        // Send the FormData to Django backend using fetch
        const csrfToken = await getCSRFToken();
        console.log("CSRF Token:", csrfToken);

        // Create FormData and append the PDF Blob
        const formData = new FormData();
        formData.append(
          "pdf",
          pdfBlob,
          filename ? filename + ".pdf" : "download.pdf"
        );
        formData.append("patientId", patientId);
        formData.append("patientName", patientName);
        formData.append("testDate", testDate);
        formData.append("reportDate", reportDate);

        console.log("FormData:", formData);

        try {
          const response = await axios.post("/upload_vitals_pdf/", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              "X-CSRFToken": csrfToken,
            },
          });

          console.log(
            "PDF successfully sent to Django backend.",
            response.data
          );
          // Hide the loader when the PDF is ready
          hideLoader();
          // Show the success notification
          showNotification("PDF successfully uploaded!");
        } catch (error) {
          console.error("Error sending PDF to Django backend.", error);
          // Show the error notification
          showNotification("Error uploading PDF. Please try again.");
        }

        // Reload the current page after a short delay
        setTimeout(() => {
          window.location.reload(true);
        }, 200);
      });
    }
  }
  ////////////////////////////////// Upload Vitals PDF without IMAGE (END) ////////////////////////


    ////////////////////////////////// Upload OPtometry PDF without IMAGE (START) ////////////////////////
    UploadDivContentOnPDFOptometry() {
      const showLoader = () => {
        console.log("Showing loader");
        const loader = document.querySelector(".loader");
        if (loader) {
          loader.style.display = "block";
        }
      };
  
      const hideLoader = () => {
        console.log("Hiding loader");
        const loader = document.querySelector(".loader");
        if (loader) {
          loader.style.display = "none";
        }
      };
  
      const extractDataFromURL = () => {
        const patientId = document.querySelector(
          "#root > div > div > div.document-editor__editable-container > div > figure.table.ck-widget.ck-widget_with-selection-handle > table > tbody > tr:nth-child(1) > td:nth-child(2) > span > strong"
        )?.innerHTML;
        const patientName = document.querySelector(
          "#root > div > div > div.document-editor__editable-container > div > figure.table.ck-widget.ck-widget_with-selection-handle > table > tbody > tr:nth-child(1) > td:nth-child(1) > span > strong"
        )?.innerHTML;
        const testDate = document.querySelector(
          "#root > div > div > div.document-editor__editable-container > div > figure.table.ck-widget.ck-widget_with-selection-handle > table > tbody > tr:nth-child(2) > td:nth-child(2) > span > strong"
        )?.innerHTML;
        const reportDate = document.querySelector(
          "#root > div > div > div.document-editor__editable-container > div > figure.table.ck-widget.ck-widget_with-selection-handle > table > tbody > tr:nth-child(2) > td:nth-child(3) > span > strong"
        )?.innerHTML;
  
        return { patientId, patientName, testDate, reportDate };
      };
  
      const showNotification = (message) => {
        const notification = document.getElementById("notification");
        const notificationText = document.getElementById("notification-text");
  
        if (notification && notificationText) {
          notificationText.innerText = message;
          notification.style.display = "block";
  
          // Hide the notification after 3 seconds (adjust the delay as needed)
          setTimeout(() => {
            notification.style.display = "none";
          }, 1000);
        }
      };
  
      const getCSRFToken = async () => {
        try {
          const response = await fetch("/get-csrf-token/");
          const data = await response.json();
          return data.csrf_token;
        } catch (error) {
          console.error("Error fetching CSRF token:", error);
          throw error;
        }
      };
      // Show the loader before starting the PDF generation
      showLoader();
      var filename = this.createFilename();
      const data = document.getElementsByClassName("ck-editor__editable")[0];
      const table = data.querySelector("table");
      data.classList.add("ck-blurred");
      data.classList.remove("ck-focused");
      const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  
      if (data != undefined) {
        var a4Width = 595.28; // A4 width in points (1 point = 1/72 inch)
        var a4Height = 841.89; // A4 height in points
  
        var canvasWidth = a4Width - 40; // Adjusted width to leave some margin
  
        html2canvas(data, {
          scale: 4, // Adjust the scale if needed for better quality
          windowWidth: document.body.scrollWidth,
          windowHeight: document.body.scrollHeight,
        }).then(async (canvas) => {
          const imgData = canvas.toDataURL("image/png", 1.0);
  
          // Calculate the height based on the aspect ratio of the captured image
          const canvasHeight = (canvasWidth / canvas.width) * canvas.height;
  
          // Hide the loader when the PDF is ready
          hideLoader();
  
          // Create PDF with only the captured content
          const pdf = new jsPDF("p", "pt", [a4Width, a4Height], true);
          pdf.addImage(imgData, "PNG", 20, 20, canvasWidth, canvasHeight);
  
          pdf.setTextColor(255, 255, 255);
  
          // Calculate the position to place the text at the bottom
          const textX = 40;
          const textY = 841.89 - 2; // 20 points from the bottom
  
          // If a table exists within the ck-editor__editable div, capture its text content
          if (table) {
            const tableText = table.textContent || "";
  
            // Add the table text as text (preserve original formatting)
            pdf.setFontSize(2); // Adjust the font size as needed
            pdf.text(textX, textY, tableText);
          }
  
          // Iterate through all paragraphs in the ck-editor__editable div
          const paragraphs = data.querySelectorAll("p");
          paragraphs.forEach((paragraph) => {
            const paragraphText = paragraph.textContent || "";
  
            // Add each paragraph text as text (preserve original formatting)
            pdf.setFontSize(2); // Adjust the font size as needed
            pdf.text(textX, textY - 2, paragraphText); // Place it above the table text
          });
  
          // Convert the PDF to a Blob
          const pdfBlob = pdf.output("blob");
  
          // Extract data from URL
          const { patientId, patientName, testDate, reportDate } =
            extractDataFromURL();
  
          // Send the FormData to Django backend using fetch
          const csrfToken = await getCSRFToken();
          console.log("CSRF Token:", csrfToken);
  
          // Create FormData and append the PDF Blob
          const formData = new FormData();
          formData.append(
            "pdf",
            pdfBlob,
            filename ? filename + ".pdf" : "download.pdf"
          );
          formData.append("patientId", patientId);
          formData.append("patientName", patientName);
          formData.append("testDate", testDate);
          formData.append("reportDate", reportDate);
  
          console.log("FormData:", formData);
  
          try {
            const response = await axios.post("/upload_optometry_pdf/", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
                "X-CSRFToken": csrfToken,
              },
            });
  
            console.log(
              "PDF successfully sent to Django backend.",
              response.data
            );
            // Hide the loader when the PDF is ready
            hideLoader();
            // Show the success notification
            showNotification("PDF successfully uploaded!");
          } catch (error) {
            console.error("Error sending PDF to Django backend.", error);
            // Show the error notification
            showNotification("Error uploading PDF. Please try again.");
          }
  
          // Reload the current page after a short delay
          setTimeout(() => {
            window.location.reload(true);
          }, 200);
        });
      }
    }
    ////////////////////////////////// Upload Optometry PDF without IMAGE (END) ////////////////////////








  //////////////////////////////////////////////////////////////
  toDataURL(url, index, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var reader = new FileReader();
      reader.onloadend = function () {
        callback(index, reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.send();
  }

  Export2Doc() {
    var filename = this.createFilename();
    console.log("printig word");
    const data = document.getElementsByClassName("ck-editor__editable")[0];

    var imgs = data.getElementsByTagName("img");
    console.log(...imgs);
    for (var i = 0; i < imgs.length; i++) {
      this.toDataURL(imgs[i].src, i, function (index, data) {
        console.log(imgs[index].src + "==>" + data);
        imgs[index].src = data;
      });
    }
    var element = data;
    console.log(data);
    //  _html_ will be replace with custom html
    var meta =
      "Mime-Version: 1.0\nContent-Base: " +
      location.href +
      '\nContent-Type: Multipart/related; boundary="NEXT.ITEM-BOUNDARY";type="text/html"\n\n--NEXT.ITEM-BOUNDARY\nContent-Type: text/html; charset="utf-8"\nContent-Location: ' +
      location.href +
      "\n\n<!DOCTYPE html>\n<html>\n_html_</html>";
    //  _styles_ will be replaced with custome css
    var head =
      '<head>\n<meta http-equiv="Content-Type" content="text/html; charset=utf-8">\n<style>\n_styles_\n</style>\n</head>\n';

    var html = data.innerHTML;

    var blob = new Blob(["\ufeff", html], {
      type: "application/msword",
    });

    var css =
      "<style>" +
      "img {width:300px;}table {border-collapse: collapse; border-spacing: 0;}td{padding: 6px;}" +
      "</style>";
    //  Image Area %%%%
    var options = { maxWidth: 624 };
    var images = Array();
    var img = data.getElementsByTagName("img");
    for (var i = 0; i < img.length; i++) {
      // Calculate dimensions of output image
      var w = Math.min(img[i].width, options.maxWidth);
      var h = img[i].height * (w / img[i].width);
      // Create canvas for converting image to data URL
      var canvas = document.createElement("CANVAS");
      canvas.width = w;
      canvas.height = h;
      // Draw image to canvas
      var context = canvas.getContext("2d");
      context.drawImage(img[i], 0, 0, w, h);
      // Get data URL encoding of image
      var uri = canvas.toDataURL("image/png");
      //$(img[i]).attr("src", img[i].src);
      img[i].src = img[i].src;
      img[i].width = w;
      img[i].height = h;
      // Save encoded image to array
      images[i] = {
        type: uri.substring(uri.indexOf(":") + 1, uri.indexOf(";")),
        encoding: uri.substring(uri.indexOf(";") + 1, uri.indexOf(",")),
        location: img[i].src, //$(img[i]).attr("src"),
        data: uri.substring(uri.indexOf(",") + 1),
      };
    }

    // Prepare bottom of mhtml file with image data
    var imgMetaData = "\n";
    for (var i = 0; i < images.length; i++) {
      imgMetaData += "--NEXT.ITEM-BOUNDARY\n";
      imgMetaData += "Content-Location: " + images[i].location + "\n";
      imgMetaData += "Content-Type: " + images[i].type + "\n";
      imgMetaData +=
        "Content-Transfer-Encoding: " + images[i].encoding + "\n\n";
      imgMetaData += images[i].data + "\n\n";
    }
    imgMetaData += "--NEXT.ITEM-BOUNDARY--";
    // end Image Area %%

    var output =
      meta.replace("_html_", head.replace("_styles_", css) + html) +
      imgMetaData;

    var url =
      "data:application/vnd.ms-word;charset=utf-8," +
      encodeURIComponent(output);

    filename = filename ? filename + ".doc" : "document.doc";

    var downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      downloadLink.href = url;
      downloadLink.download = filename;
      downloadLink.click();
    }

    document.body.removeChild(downloadLink);
  }

  GetDivContentOnWord() {
    var filename = this.createFilename();
    console.log("printig word");
    const data = document.getElementsByClassName("ck-editor__editable")[0];

    var imgs = data.getElementsByTagName("img");
    console.log(...imgs);
    for (var i = 0; i < imgs.length; i++) {
      this.toDataURL(imgs[i].src, i, function (index, data) {
        console.log(imgs[index].src + "==>" + data);
        imgs[index].src = data;
      });
    }
    console.log(data);

    var css =
      "<style>" +
      "@page WordSection1{size: 841.95pt 595.35pt;mso-page-orientation: landscape;}" +
      "div.WordSection1 {page: WordSection1;}" +
      "</style>";
    var preHTML =
      "<html xlmns:o='url:schemas-microsoft-com:office:office' xmlns:w='url:schemas-microsoft-com:office:word' xmlns='http://www.w3.org /TR/REC-html40'<head><meta charset='utf-8'><title>Word</title>" +
      css +
      "</head><body>";
    var postHTML = "</body></html>";
    var html = preHTML + data.innerHTML + postHTML;

    var blob = new Blob(["\ufeff", html], {
      type: "application/msword",
    });

    var url =
      "data:application/vnd.ms-word;charset=utf-8," + encodeURIComponent(html);

    filename = filename ? filename + ".doc" : "document.doc";

    var link = document.createElement("a");
    document.body.appendChild(link);

    if (navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      link.href = url;
      link.download = filename;
      link.click();
    }
    document.body.removeChild(link);
  }

  ActionEvents(evt) {
    let nindex = evt.target.selectedIndex;
    let label = evt.target[nindex].text;
    let value = evt.target.value;
    console.log("Selected Index:", nindex);
    console.log("Selected Label:", label);
    console.log("Selected Value:", value);
    switch (value) {
      case "1":
        console.log("pdf");
        this.GetDivContentOnPDFWithoutImage();
        break;
      case "2":
        console.log("pdf");
        this.GetDivContentOnPDF();
        break;
      case "3":
        console.log("pdf");
        this.GetEcgContentOnPDF();
        break;
      case "4":
        this.Export2Doc();
        break;
      case "5":
        this.printReport();
        break;
      case "6":
        this.uploadEcgPDF();
        break;
      case "7":
        console.log("Double page pdf uploaded");
        this.uploadXrayPDF();
        break;
      case "8":
        console.log("Single page pdf without image uploaded");
        this.UploadDivContentOnPDFWithoutImage();
        break;
      case "9":
        console.log("Single page pdf with image uploaded");
        this.UploadDivContentOnPDF();
        break;
      case "10":
        console.log("Vitals Report pdf");
        this.UploadDivContentOnPDFVitals();
        break;
      case "11":
        console.log("Optometry Report pdf");
        this.UploadDivContentOnPDFOptometry();
        break;
      default:
        console.log("---");
        break;
    }
    //document.getElementById("export_data").selectedIndex = 0;
    evt.target.selectedIndex = 0;
  }

  handleSeletion(evt) {
    let nindex = evt.target.selectedIndex;
    let label = evt.target[nindex].text;
    let value = evt.target.value;
    this.setState({
      options_label: label,
      reportFrmData: this.generatePatientTable(),
    });
    options.forEach(({ label, id }) => {
      if (value == id) {
        this.handleClick();
      }
    });
  }

  


  


    
  render() {
    const { data, handleClick, name } = this.props;
    const urlSearchParams = new URLSearchParams(window.location.search);
    const { options_label, reportFrmData } = this.state;
    
    
    
    return (
      <div>
        
        <div className="document-editor">
          <div className="document-editor__toolbar"></div>
            <div className="page-content" id='page-content'>
              <div className="document-editor__editable-container" id='reportEditor'>
              {this.state.modal && options_label === "X-RAY CHEST" ? (
          <XrayChest
            handleClick={this.handleClick}
            reportFrmData={reportFrmData}
            generateReport={this.generateReport}
            generatePatientTable={this.generatePatientTable()}
          />
        ) : this.state.modal && options_label === "CT PNS" ? (
          <PnsAbnormal
            handleClick={this.handleClick}
            reportFrmData={reportFrmData}
            generateReport={this.generateReport}
            generatePatientTable={this.generatePatientTable()}
          />
        ) : this.state.modal && options_label === "CAMP ECG" ? (
          <CampECG2
            handleClick={this.handleClick}
            reportFrmData={reportFrmData}
            generateReport={this.generateReport}
            generatePatientTable={this.generatePatientTable()}
          />
        ) : this.state.modal && options_label === "X-RAY LEFT-SHOULDER" ? (
          <XrayLeftShoulder
            handleClick={this.handleClick}
            reportFrmData={reportFrmData}
            generateReport={this.generateReport}
            generatePatientTable={this.generatePatientTable()}
          />
        ) : this.state.modal && options_label === "X-RAY RIGHT-SHOULDER" ? (
          <XrayRightShoulder
            handleClick={this.handleClick}
            reportFrmData={reportFrmData}
            generateReport={this.generateReport}
            generatePatientTable={this.generatePatientTable()}
          />
        ) : this.state.modal && options_label === "X-RAY KNEE" ? (
          <XrayKnee
            handleClick={this.handleClick}
            reportFrmData={reportFrmData}
            generateReport={this.generateReport}
            generatePatientTable={this.generatePatientTable()}
          />
        ) : this.state.modal && options_label === "X-RAY SPINE(CERVICAL)" ? (
          <XraySpineCervical
            handleClick={this.handleClick}
            reportFrmData={reportFrmData}
            generateReport={this.generateReport}
            generatePatientTable={this.generatePatientTable()}
          />
        ) : this.state.modal && options_label === "X-RAY SPINE(LUMBER)" ? (
          <XraySpineLumber
            handleClick={this.handleClick}
            reportFrmData={reportFrmData}
            generateReport={this.generateReport}
            generatePatientTable={this.generatePatientTable()}
          />
        ) : this.state.modal && options_label === "X-RAY SPINE(DORSAL)" ? (
          <XraySpineDorsal
            handleClick={this.handleClick}
            reportFrmData={reportFrmData}
            generateReport={this.generateReport}
            generatePatientTable={this.generatePatientTable()}
          /> // this.state.modal && (options_label === "ECG") ?
        ) : //   <ECG handleClick={this.handleClick} reportFrmData={reportFrmData} generateReport={this.generateReport} generatePatientTable={this.generatePatientTable()} /> :
        this.state.modal && options_label === "VITALS" ? (
          <Vitals
            handleClick={this.handleClick}
            reportFrmData={reportFrmData}
            generateReport={this.generateReport}
            generatePatientTable={this.generatePatientTable()}
          />
        ) : this.state.modal && options_label === "OPTOMETRY" ? (
          <Optometry
            handleClick={this.handleClick}
            reportFrmData={reportFrmData}
            generateReport={this.generateReport}
            generatePatientTable={this.generatePatientTable()}
          />
        ) : this.state.modal && options_label === "OPTOMETRY NO-INPUT" ? (
          <Optometry2
            handleClick={this.handleClick}
            reportFrmData={reportFrmData}
            generateReport={this.generateReport}
            generatePatientTable={this.generatePatientTable()}
          />
        ) : this.state.modal && options_label === "OPTOMETRY (CAMP)" ? (
          <Optometry3
            handleClick={this.handleClick}
            reportFrmData={reportFrmData}
            generateReport={this.generateReport}
            generatePatientTable={this.generatePatientTable()}
          />
        ) : this.state.modal && options_label === "AUDIOMETRY" ? (
          <Audiometry
            handleClick={this.handleClick}
            reportFrmData={reportFrmData}
            generateReport={this.generateReport}
            generatePatientTable={this.generatePatientTable()}
          />
        ) : this.state.modal &&
          options_label === "OPTOMETRY (CAMP) NO-INPUT" ? (
          <Optometry4
            handleClick={this.handleClick}
            reportFrmData={reportFrmData}
            generateReport={this.generateReport}
            generatePatientTable={this.generatePatientTable()}
          />
        ) : this.state.modal && options_label === "CT ABDOMEN" ? (
          <CtAbdomen
            handleClick={this.handleClick}
            reportFrmData={reportFrmData}
            generateReport={this.generateReport}
            generatePatientTable={this.generatePatientTable()}
          />
        ) : this.state.modal && options_label === "CT HEAD" ? (
          <CtHead
            handleClick={this.handleClick}
            reportFrmData={reportFrmData}
            generateReport={this.generateReport}
            generatePatientTable={this.generatePatientTable()}
          />
        ) : (
          ""
        )}
                <CKEditor
                  editor={DecoupledEditor}
                  data={reportFrmData}
                  onInit={(editor) => {
                    editor.onclick = this.onclickDiv;
                    window.editor = editor;
                    editor.allowedContent = true;
                    const toolbarContainer = document.querySelector(
                      ".document-editor__toolbar"
                    );

                    toolbarContainer.appendChild(editor.ui.view.toolbar.element);

                    window.editor.ui.view.toolbar.element.children[0].appendChild(
                      this.copyAction()
                    );
                    window.editor.ui.view.toolbar.element.children[0].appendChild(
                      this.choose()
                    );
                    // window.editor.ui.view.toolbar.element.children[0].appendChild(this.getPDFButton());
                    window.editor.ui.view.toolbar.element.children[0].appendChild(
                      this.actionDropDown()
                    );

                    window.editor.ui.view.toolbar.element.children[0].appendChild(
                      this.userDropdown()
                    );
                  }}
                />
                
              </div>

                <div className='previewTab' id='previewTab'>

                </div>

                <div className='cornerstone-container'>
                    <div className='tools'>

                        {/*Button for enabling Zoom tool */}
                        <div className="button-container"><button className='tool-button' value='Zoom' onClick={e => this.toggleTool(e.target.value)}>Zoom</button></div>

                        {/*Button for enabling Pan tool, drop down for changing alignment settings */}
                        <div className="button-container" id='Pan Settings'>
                          <button className='tool-button' value='Pan' onClick={e => this.toggleTool(e.target.value)}>Pan</button>
                          <select id="alignment" className="dropdown" onChange={e => this.alignmentSettings(e.target.value, selected_viewport)}>
                            <option value='' selected disabled hidden></option>
                            <option value='AlignLeft'>Align Left</option>
                            <option value='AlignCenter'>Align Center</option>
                            <option value='AlignRight'>Align Right</option>
                          </select>
                        </div>


                        {/*Drop down for changing rotation and flip settings */}
                        <div className="button-container" id='Orientation Settings'>
                          <button className='tool-button' value='PlanarRotate' onClick={e => this.toggleTool(e.target.value)}>Rotate</button>
                          <select id='orientation' className="dropdown" onChange={e => this.orientationSettings(e, selected_viewport)}>
                            <option value='' selected disabled hidden></option>
                            <option value='Rleft'>Rotate Left</option>
                            <option value='Rright'>Rotate Right</option>
                            <option value='Hflip'>Horizontal Flip</option>
                            <option value='Vflip'>Vertical Flip</option>
                          </select>
                        </div>
                        
                        {/*Button for enabling Probe Tool */}
                        <div className="button-container"><button className='tool-button' value='Probe' onClick={e => this.toggleTool(e.target.value)}>Probe</button></div>
                        
                        {/*Button for enabling Contrast tool, Drop down for changing windowing settings*/}
                        <div className="button-container">
                          <button className='tool-button' value='Contrast' onClick={e => this.toggleTool(e.target.value)}>Windowing</button>
                          <select id='windowing' className="dropdown" onChange={e => this.windowingSettings(e, selected_viewport)}>
                            <option value='' selected disabled hidden></option>
                            <option value="Invert">Invert</option>
                            <option value="Bone">Bone</option>
                            <option value="Lungs">Lungs</option>
                            <option value="Brain">Brain</option>
                            <option value="Abdomen">Abdomen</option>
                            <option value="ST">Soft Tissue</option>
                            <option value="Liver">Liver</option>
                            <option value="Mediastinal">Mediastinal</option>
                          </select>
                          </div>
                        
                        {/*Drop down for enabling measurement tools */}
                        <div className="button-container">
                          <button className='name-button' disabled>Measurements</button>
                          <select id="measurement" className="dropdown" onChange={e => this.toggleTool(e.target.value)}>
                            <option value='' selected disabled hidden></option>
                            <option value='Length'>Length</option>
                            <option value='Height'>Height</option>
                            <option value='Angle'>Angle</option>
                            <option value='CobbAngle'>Cobb Angle</option>
                            <option value='RectangleROI'>Rectangle ROI</option>
                            <option value='CircleROI'>Circle ROI</option>
                            <option value='EllipticalROI'>Elliptical ROI</option>
                            <option value='FreehandROI'>Freehand ROI</option>
                            <option value='SplineROI'>Spline ROI</option>
                            <option value='Bidirectional'>Bidirectional</option>
                            <option value='ArrowAnnotate'>Arrow Annotate</option>
                          </select>
                        </div>

                        {/*Button for enabling Eraser tool */}
                        <div className="button-container"><button className='tool-button' value='Eraser' onClick={e => this.toggleTool(e.target.value)}>Eraser</button></div>
                        
                        {/*Drop down for changing MPR orientation for a volume in a selected viewport */}
                        <div className="button-container">
                          <button className='name-button' disabled>MPR</button>
                          <select id='mpr' className="dropdown" onChange={e => this.volumeOrientation(e, selected_viewport)}>
                            <option value='' selected disabled hidden></option>
                            <option value='axial'>Axial</option>
                            <option value='sagittal'>Sagittal</option>
                            <option value='coronal'>Coronal</option>
                          </select>
                        </div>

                        {/*Slider for changing selected viewports slab thickness */}
                        <div className='button-container'>
                          <button className='name-button' disabled>Slab Thickness</button>
                          <input type='range' min='0' max='50' defaultValue='0' class='slider' id='slider' onChange={e => this.slabThickness(e.target.value, selected_viewport)}></input>
                        </div>
                        
                        {/*Drop down for changing the layout of the viewports */}
                        <div className="button-container">
                          <button className='name-button' disabled>Layout</button>
                          <select id="layout" className="dropdown" onChange={e => this.layoutSettings(e)}>
                            <option value='one' selected>1x1</option>
                            <option value='two'>1x2</option>
                            <option value='four'>2x2</option> 
                          </select>
                        </div>

                        {/*Button for resetting selected viewport settings */}
                        <div className="button-container"><button className='tool-button' value='Reset' onClick={e => this.viewportSettings(e.target.value, selected_viewport)}>Reset</button></div>

                        {/*Button for capturing selected viewport */}
                        <div className="button-container"><button className='tool-button' onClick={e => this.capture(prev_selected_element)}>Capture</button></div>

                        {/*Button for hiding editor and putting the viewer in full screen mode */}
                        <div className="button-container"><button className='tool-button' value='small' id='fullScreen' onClick={e => this.fullScreen(e.target.value)}>Full Screen</button></div>
                    </div>

                    {/*container for all four viewports */}
                    <div className='viewport-container' id='viewport-container'>
                      <div className="viewport" id='viewport1' data-value='first'  onDragOver={e => this.allowDrop(e)} onDrop={e => this.drop(e)}></div>
                      <div className="viewport" id='viewport2' data-value='second' onDragOver={e => this.allowDrop(e)} onDrop={e => this.drop(e)}></div>
                      <div className="viewport" id='viewport3' data-value='third'  onDragOver={e => this.allowDrop(e)} onDrop={e => this.drop(e)}></div>
                      <div className="viewport" id='viewport4' data-value='fourth' onDragOver={e => this.allowDrop(e)} onDrop={e => this.drop(e)}></div>
                    </div>

                    {/*Container for patient details */}
                    <div className='details'>
                      <div id="viewport1Index">Image: </div>
                      <div id='viewport2Index'>Image: </div>
                      <div id='viewport3Index'>Image: </div>
                      <div id='viewport4Index'>Image: </div>

                    </div>
                    <div id='output'></div>
                    
                </div>  
              </div>
          </div> 
        </div>
    );
    
  };

  //remove all images and metadata from cache, destroy any created volumes
  componentWillUnmount() {
    //terminate webworkers that are used for decoding dicom files
    cornerstoneDICOMImageLoader.webWorkerManager.terminate();

    //destroy cornerstone tools
    cornerstoneTools.destroy();

    //destroy the created rendering engine
    renderingEngine.destroy();

    //decache and destroy all the volumes created
    for (const volume of cornerstone.cache.getVolumes()){
      volume.decache(true)
      volume.destroy();
    };

    //purge cache
    cornerstone.cache.purgeCache();
    
  }
  
}

render(<App />, document.getElementById("root"));


