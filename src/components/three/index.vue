<script setup lang="ts">
import { ref, onMounted } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as dat from 'dat.gui';

const threeCanvas = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
    const canvas = threeCanvas.value;
    if (!canvas) return;
    const gui = new dat.GUI();


    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setPixelRatio(window.devicePixelRatio); // responsiv
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(width, height);
    const scene = new THREE.Scene();

    //创建分组
    const group = new THREE.Group();
    scene.add(group);
    
    const loader = new GLTFLoader();
    //桌子
    let model:any;

    loader.load('/src/assets/chinese_console_table_1k.gltf', (gltf) => {
        model = gltf.scene;
        console.log('GLTF 加载结果', gltf);

        model.position.set(0, 1, 0);
        model.scale.set(1.1, 1.1, 1.1);
        group.add(model);
    }, undefined, (error) => {
        console.error('GLTF 加载失败', error);
    });
    //狮头
    loader.load('/src/assets/lion_head_1k.gltf', (gltf) => {
        const lionModel = gltf.scene;
        console.log('GLTF 加载结果', gltf);
        lionModel.position.set(-0.666, 1.631, 0);
        lionModel.scale.set(1.1, 1.1, 1.1);
        group.add(lionModel);
        // 狮头位置 dat.gui 控制
        // gui.add(lionModel.position, 'x', -10, 10, 0.001).name('狮头x轴');
        // gui.add(lionModel.position, 'y', -10, 10, 0.001).name('狮头y轴');
        // gui.add(lionModel.position, 'z', -10, 10, 0.001).name('狮头z轴');
    }, undefined, (error) => {
        console.error('GLTF 加载失败', error);
    });

    //牛头
    loader.load('/src/assets/bull_head_1k.gltf', (gltf) => {
        const bullModel = gltf.scene;
        console.log('GLTF 加载结果', gltf);
        bullModel.position.set(0.666, 1.631, 0);
        bullModel.scale.set(1.1, 1.1, 1.1);
        group.add(bullModel);
        // 狮头位置 dat.gui 控制
        // gui.add(lionModel.position, 'x', -10, 10, 0.001).name('狮头x轴');
        // gui.add(lionModel.position, 'y', -10, 10, 0.001).name('狮头y轴');
        // gui.add(lionModel.position, 'z', -10, 10, 0.001).name('狮头z轴');
    }, undefined, (error) => {
        console.error('GLTF 加载失败', error);
    });
     //马头
     loader.load('/src/assets/horse_head_1k.gltf', (gltf) => {
        const horseModel = gltf.scene;
        console.log('GLTF 加载结果', gltf);
        horseModel.position.set(0, 1.631, 0);
        horseModel.scale.set(1.1, 1.1, 1.1);
        group.add(horseModel);
        // 狮头位置 dat.gui 控制
        // gui.add(lionModel.position, 'x', -10, 10, 0.001).name('狮头x轴');
        // gui.add(lionModel.position, 'y', -10, 10, 0.001).name('狮头y轴');
        // gui.add(lionModel.position, 'z', -10, 10, 0.001).name('狮头z轴');
    }, undefined, (error) => {
        console.error('GLTF 加载失败', error);
    });

    // const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    // scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 3.91);
    directionalLight.position.set(-3.045, 4.091, 4.524);
    scene.add(directionalLight);

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    scene.add(camera);
    camera.position.set(0, 1.479, 1.7);

    // const controls = new OrbitControls(camera, canvas);
    // controls.enableDamping = true;
    // controls.dampingFactor = 0.05;

    gui.add(camera.position, 'x', 0, 5, 0.001).name('相机x轴');
    gui.add(camera.position, 'y', 0, 5, 0.001).name('相机y轴');
    gui.add(camera.position, 'z', 0, 5, 0.001).name('相机z轴');
    //环境光强度
    // gui.add(ambientLight, 'intensity', 0, 10, 0.001).name('环境光强度');
    //方向光强度
    // gui.add(directionalLight, 'intensity', 0, 10, 0.001).name('方向光强度');
    //方向光位置
    // gui.add(directionalLight.position, 'x', -10, 10, 0.001).name('方向光x轴');
    // gui.add(directionalLight.position, 'y', -10, 10, 0.001).name('方向光y轴');
    // gui.add(directionalLight.position, 'z', -10, 10, 0.001).name('方向光z轴');
   
    // const geometry = new THREE.BoxGeometry(1, 1, 1);
    // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // const cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);

    const clock = new THREE.Clock();

    const animate = () => {
        requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();
        //让group绕着自己的中心带你沿着y轴旋转
        // group.rotation.y = elapsedTime * 0.1;

        // cube.rotation.x += 0.01;
        // cube.rotation.y += 0.01;
        // controls.update();
        renderer.render(scene, camera);
    }

    animate();

})

</script>

<template>
    <div class="h-[800px] w-full">
        <canvas ref="threeCanvas" class="h-full w-full"></canvas>
    </div>
</template>

<style>
    .dg.ac {
        z-index: 999 !important;
    }
</style>