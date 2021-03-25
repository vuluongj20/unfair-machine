import React, { Component } from 'react'
import './Home.css'

import gsap from 'gsap'
import * as THREE from 'three'
import windowResize from 'window-resize'

import Hero from './hero/Hero'
import Quote from './quote/Quote'
import Menu from './menu/Menu'
import Footer from '../../layouts/footer/Footer'

class Home extends Component {
	constructor(props) {
	  super(props)
	  this.initThree = this.initThree.bind(this)
	}

	initThree() {
		const wrapper = document.querySelector('.home-three-inner-wrap')
	  const wrapperBBox = wrapper.getBoundingClientRect()
	  const width = wrapperBBox.width,
	    height = wrapperBBox.height
	  const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10)
	  camera.position.z = 2
	  const scene = new THREE.Scene()

	  const geometry = new THREE.BoxGeometry(0.7, 0.7, 0.7)
	  const material = new THREE.MeshBasicMaterial({ color: '#1A1A1A' })
	  const mesh = new THREE.Mesh(geometry, material)
	  scene.add(mesh)

	  const wireframeBoxGeometry = new THREE.BoxGeometry(0.7, 0.7, 0.7)
	  const wireframeGeometry = new THREE.EdgesGeometry(wireframeBoxGeometry)
	  const wireframeMaterial = new THREE.LineBasicMaterial({ color: '#EFEFEF' })
	  const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial)
	  scene.add(wireframe)

	  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
	  renderer.setSize(width, height)
	  renderer.setPixelRatio(window.devicePixelRatio)
	  wrapper.append(renderer.domElement)

    renderer.render(scene, camera)

    this.threeObjects = {
  		wireframe,
  		mesh
    }

	  const animate = (now) => {
	    renderer.render(scene, camera)
	    requestAnimationFrame(animate)
	  }
	  animate()
	}

	componentDidMount() {
		// const updateThreeWrapperDimensions = (callback) => {
		// 	const threeWrapperBBox = document.querySelector('.home-three-wrap').getBoundingClientRect()
		// 	this.setState({
		// 		threeWrapper: {
		// 			width: threeWrapperBBox.width,
		// 			height: threeWrapperBBox.height
		// 		}
		// 	}, callback)
		// }
		// updateThreeWrapperDimensions(() => {
		// 	const { width, height } = this.state.threeWrapper
		// 	const { wireframe, mesh } = this.threeObjects
		// 	gsap.set('.home-three-inner-wrap', {
		// 		x: -width * 0.36,
		// 		y: height * 0.36
		// 	})

		// 	gsap.to(wireframe.rotation, {
		// 		z: Math.PI * 0.4, 
		// 		x: Math.PI * 0.4,
		// 		ease: 'expo.out',
		// 		duration: 2
		// 	})
		// 	gsap.to(mesh.rotation, {
		// 		z: Math.PI * 0.4, 
		// 		x: Math.PI * 0.4,
		// 		ease: 'expo.out',
		// 		duration: 2
		// 	})
		// })
		// windowResize.add(updateThreeWrapperDimensions)

		// this.initThree()
	}

	componentWillUnmount() {
	  // windowResize.clear()
	}

  render() {
  	const { location } = this.props
    return (
			<div>
				<Hero />
				<hr />
				<Quote />
				<hr />
				<Menu location={location} />
				<Footer />
			</div>
    )
  }
}

export default Home
