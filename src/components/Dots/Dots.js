import * as THREE from 'three';
//import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import {FBXLoader } from 'three/addons/loaders/FBXLoader';

function ThreeDots() {
  // Создаем сцену, камеру и рендерер
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor ( 0xFFFFFF, 0 );
  document.body.appendChild(renderer.domElement);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
  const keyLight = new THREE.DirectionalLight(0xffffff, 1.1);
  const fillLight = new THREE.DirectionalLight(0xffffff, 0.8);

  fillLight.position.set(-6, 2, 2);
  keyLight.position.set(0.5, 0, 0.866);
  scene.add(ambientLight);
  scene.add(keyLight);
  scene.add(fillLight);

  // Загружаем модель 3D
  //const loader = new GLTFLoader();
  //loader.load('/scene.gltf', function (gltf) {
  //const model = gltf.scene;
  //   scene.add(gltf.scene);
  //});
  let mixer;


  const loader = new FBXLoader();
  loader.load( './dots.fbx', function ( object ) {

    mixer = new THREE.AnimationMixer( object );

    const action = mixer.clipAction( object.animations[ 0 ] );
    action.play();

    object.traverse( function ( child ) {

      if ( child.isMesh ) {

        child.castShadow = true;
        child.receiveShadow = true;

      }

    } );

    scene.add( object );

  } );





  // Позиционируем камеру
  camera.position.z = 10;

  // Функция анимации объектов на сцене
  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }

  animate();

};



export default ThreeDots;
