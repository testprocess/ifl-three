import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

class Scene {
  scene: THREE.Scene;
  renderer: THREE.WebGLRenderer;
  camera: any;
  mesh: any;
  controls: OrbitControls;
  constructor() {
    const width = window.innerWidth,
      height = window.innerHeight;

    this.camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 10);
    this.camera.position.z = 1;

    this.scene = new THREE.Scene();

    const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    const material = new THREE.MeshNormalMaterial();
    this.mesh = new THREE.Mesh(geometry, material);
    this.scene.add(this.mesh);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(width, height);
    this.renderer.setAnimationLoop(this.animate.bind(this));

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.update();
    document.body.appendChild(this.renderer.domElement);
  }

  animate() {
    // this.mesh.rotation.x = time / 2000;
    // this.mesh.rotation.y = time / 1000;

    this.controls.update();

    this.renderer.render(this.scene, this.camera);
  }
}

export { Scene };
