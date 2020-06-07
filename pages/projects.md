---
layout: default
title: Projects
---

# Liquid simulation using IISPH

![Dam Break Simulation](/assets/img/hokusai/simpleBreakingDam.png "Dam break simulation"){: .responsive-image}

## Summary 

A simple C++ implementation of the implicit incompressible sph model (IISPH) proposed by [Ihmsen et al.](#ihmsen2014).

- **Boundaries** are handled using the method of [Akinci et al.](#Akinci2012)
- **Surface tension** has been implemented using the model proposed by [Akinci et al.](#Akinci2013)
- Neighbor search uses Z-sorting to improve cache efficiency.
- Blender was used for offline rendering.

## Downloads

[Github](https://github.com/manteapi/hokusai)

## Results

<div class="responsive-iframe-container">
<iframe class="responsive-iframe" src="https://www.youtube.com/embed/v5bxcxcEiU4" allowfullscreen></iframe>
</div>

## References

- <a id="ihmsen2014"></a> Markus Ihmsen, Jens Cornelis, Barbara Solenthaler, Christopher Horvath, and Matthias Teschner. <cite>Implicit Incompressible SPH</cite>. In: IEEE Transactions on Visualization and Computer Graphics 20.3 (2014), pp. 426–435.
- <a id="Akinci2012"></a> Nadir Akinci, Markus Ihmsen, Gizem Akinci, Barbara Solenthaler, Matthias Teschner. <cite>Versatile Rigid-Fluid Coupling for Incompressible SPH</cite>. ACM Transactions on Graphics (Proc. SIGGRAPH 2012), vol. 31, no. 4, pp. 62:1-62:8, July 2012.
- <a id="Akinci2013"></a> Nadir Akinci, Gizem Akinci, and Matthias Teschner. <cite>Versatile surface tension and adhesion for SPH fluids</cite>. ACM Trans. Graph., 32(6):182:1–182:8, 2013.
        
# Raytracer sandbox

## Summary

A c++ raytracer based on the work of [Turner Whitted](#Whitted) and [ScratchAPixel](https://www.scratchapixel.com/) tutorials.
This work is a sandbox for learning and exploring new techniques related to raytracing used for rendering images.
The current implementation is extremely slow as it does leverage any acceleration structure.
This project features :
- Rendering of spheres, plane and triangle meshes.
- Reflection, refraction and diffusive illumination models.
- Hard shadows

## Downloads

[Github](https://github.com/manteapi/raytracer-sandbox)

## Results

![Simple spheres raytracing](/assets/img/raytracer-sandbox/simplesspheres.png "Simple spheres raytracing"){: .responsive-image}
        
## References

- <a id="Whitted"></a> Turner Whitted. 1980. An improved illumination model for shaded display. Commun. ACM 23, 6 (June 1980), 343-349.
