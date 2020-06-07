---
layout: default
title: Thesis
---

# Simulation and control of physical phenomena

## Research

My research lies in the area of computer graphics, more specifically in physically based simulation of deformable models and fluids. 
I am particularly interested in adaptive models to allow the expression of complex effects and drastically reduce computational cost.

In computer graphics, the physical phenomena simulated for the creation of animations, video games or the design of objects are more and more complex:First, in terms of the computational cost, the scale of the simulations can be extremely important ; Then, in terms of the complexity of the phenomena themselves, which require the models to be able to change their state and shape.
This growing complexity introduces new challenges in order to offer control on these large scale simulations to the user. In many cases, this control is reduced to a trial-and-error process in order to determine the parameters of the simulation which best meet the objectives of the user.

In this thesis, we propose three techniques to tackle these challenges. First, we introduce a new adaptive model which allows the reduction of the computational cost in Lagrangian simulations of particles. In contrast with re-sampling strategies, the number of degrees of freedom remains constant throughout the simulation.
Therefore, the method is simpler to integrate into an existing simulator and the memory consumption remains constant, which can be an advantage in an interactive context. Then, we propose an algorithm which allows the detailed cutting of thin deformable objects. Our method relies on a dynamic update of the shape functions associated to the degrees of freedom, which therefore allows the use of a very low number of degrees of freedom while performing detailed topological changes. Finally, we focus on the control of animations of liquid and take inspiration from interactive methods of shape editing in the field of 3D modeling. We introduce a system where the user directly edits the result of the simulation: a sequence of meshes representing the surface of the liquid. We propose selection and editing spatio-temporal tools inspired from static shape sculpting software.

### <a class="mdi mdi-github-box" href="https://github.com/manteapi/phd-thesis"></a> <a class="mdi mdi-file-pdf-box" href="https://manteapi.github.io/publications/thesis/thesis.pdf">Thesis</a>, <a class="mdi mdi-file-pdf-box" href="https://manteapi.github.io/publications/thesis/presentation.pdf">Slides</a> 

## Publications

    {%
      include publication_item.html
      teaser_url="/assets/img/fluidsculpting/fluidSculptingTeaser.png"
      project_url="./publications/fluidSculpting_MIG_2016/index.html"
      title="Space-time sculpting of liquid animation"
      authors='Pierre-Luc Manteaux<sup>*</sup>, Ulysse Vimont<sup>*</sup>, Chris Wojtan, Damien Rohmer, Marie-Paule Cani, <sup>*</sup>joint first authors'
      conference="Motion In Games 2016"
      paper_url="https://manteapi.github.io/publications/fluidSculpting_MIG_2016/fluidSculpting-mig2016.pdf"
      video_url="https://manteapi.github.io/publications/fluidSculpting_MIG_2016/video/fluidSculpting_mig2016.mp4"
      bibtex_url="./publications/fluidSculpting_MIG_2016/STFS_MIG2016.bib"
    %}

    {%
      include publication_item.html
      teaser_url="/assets/img/star/STAR_Teaser.png"
      project_url="./publications/starAdaptivity_CGF_2016/index.html"
      title="Adaptive Physically-Based Models in Computer Graphics"
      authors='Pierre-Luc Manteaux, Chris Wojtan, Rahul Narain, Stephane Redon, François Faure, Marie-Paule Cani'
      conference="Computer Graphics Forum 2016"
      paper_url="https://manteapi.github.io/publications/starAdaptivity_CGF_2016/starAdaptivity-cgf.pdf"
      bibtex_url="./publications/starAdaptivity_CGF_2016/APMCG_CGF2016.bib"
    %}

    {%
      include publication_item.html
      teaser_url="/assets/img/cutting/Manteaux_MIG2015_IDCTS.png"
      project_url="./publications/cutting_MIG2015/index.html"
      title="Interactive Detailed Cutting of Thin Sheets"
      authors="Pierre-Luc Manteaux, Wei-Lun Sun, François Faure, Marie-Paule Cani, James F. O'Brien"
      conference="Motion In Games 2015"
      paper_url="https://hal.inria.fr/hal-01206780/document"
      video_url="https://hal.inria.fr/hal-01206780/file/Manteaux_MIG2015_IDCTS.mp4"
      bibtex_url="./publications/cutting_MIG2015/IDCTS_MIG2015.bib"
    %}

    {%
      include publication_item.html
      teaser_url="/assets/img/tearing/Lejemble_2015_Thumbnail.png"
      project_url="./publications/tearing_MIG2015/index.html"
      title="Interactive procedural simulation of paper tearing with sound"
      authors='Thibault Lejemble, Amélie Fondevilla, Nicolas Durin, Thibault Blanc-Beyne, Camille Schreck, Pierre-Luc Manteaux, Paul G. Kry, Marie-Paule Cani'
      conference="Motion In Games 2015"
      paper_url="https://hal.inria.fr/hal-01206764/document"
      video_url="https://hal.inria.fr/hal-01206764/file/Lejemble_MIG2015_IPSPTS.mp4"
      bibtex_url="./publications/tearing_MIG2015/IPSPT_MIG2015.bib"
    %}

    {%
      include publication_item.html
      teaser_url="/assets/img/arps/arpsTeaserThumbnail.png"
      project_url="./publications/arps_VRIPHYS2013/index.html"
      title="Exploring the Use of Adaptively Restrained Particles for Graphics Simulations"
      authors='Pierre-Luc Manteaux, François Faure, Stéphane Redon, Marie-Paule Cani'
      conference="VRIPHYS 2013"
      paper_url="https://hal.inria.fr/docs/00/91/46/53/PDF/arps-vriphys2013.pdf"
      video_url="https://hal.inria.fr/docs/00/91/46/53/VIDEO/VideoPaper1004.flv"
      bibtex_url="./publications/arps_VRIPHYS2013/EARPS_VRIPHYS2013.bib"
    %}


## Teaching

### Main courses

{::options parse_block_html="true" /}

<div style="overflow-x:auto;">

| Title | Institute | Hours | Type | Level | Students | Year |
| ----- | --------- | ----- | ---- | ----- | -------- | ---- |
| [3D Computer Graphics](https://chamilo2.grenet.fr/inp/courses/ENSIMAG4MMG3D/document/instructions/index.html) | Ensimag | 18 | TP | Bac+4 | 30 | 2016 |
| [3D Computer Graphics](https://chamilo2.grenet.fr/inp/courses/ENSIMAG4MMG3D/document/instructions/index.html) | Ensimag | 18 | TP | Bac+4 | 30 | 2014 |
| [Synthèse d'Image](./teaching/polytech_syntheseimage/index.html) | Polytech Grenoble | 12 | TP | Bac+4 | 30 | 2014 |
| [Visualisation Scientifique](./teaching/imag_visu/index.html) | UJF, UFR IMAG | 9 | TP | Bac+5 | 30 | 2014 |
| [Géométrie Numérique](./teaching/imag_geonum/index.html) | UJF, UFR IMAG | 16.5 | TP | Bac+4 | 30 | 2014 |

</div>

### Personal contributions
        
In 2015, I proposed to completely update the practicals for the course of 3D Graphics at Ensimag. With the help of Thomas Delame, I built a small game engine targeted for beginners in OpenGL 4 and allowing to getting familiar with modern GPU technologies. Aside from the engine, I wrote seven tutorials to introduce essential concepts of Computer Graphics: rendering, modeling and animation. A final project was proposed at the end of the course, students had to produce a kart racing game. They actually produced nice results.

### Specific courses

I participated to the management of students during the project time of at Ensimag. These projects allowed me to be involved in advanced scientific problems on different topics. The list of the project I was involved in is just below. Also, from 2013 to 2016 I was invited to be part of the jury of these projects.

<div style="overflow-x:auto;">

| Title | Institute | Hours | Level | Students | Year |
| ----- | --------- | ----- | ----- | -------- | ---- |
| [Génération d'un écosystème](teaching/ensimag_projetspe/ecosystem/index.html) | Ensimag | 10 | Bac+4 | 4 | 2016 |
| [Modélisation et animation des changements de forme d'une plaquette sanguine](teaching/ensimag_projetspe/blood_plaquettes/index.html) | Ensimag | 10 | Bac+4 | 3 | 2016 |
| [Simulation d'un fluide en milieu poreux](teaching/ensimag_projetspe/sph_porous_media/index.html) | Ensimag | 10 | Bac+4 | 4 | 2016 |
| [Animation sonorisé de la déchirure du papier](teaching/ensimag_projetspe/paper_tearing_sound/index.html) | Ensimag | 10 | Bac+4 | 4 | 2015 |
| [Simulation d'un fluide à l'aide de particules SPH](teaching/ensimag_projetspe/sph_water/index.html) | Ensimag | 10 | Bac+4 | 4 | 2013 |
| [Simulation des équations de Shallow-Water avec SPH](teaching/ensimag_projetspe/sph_shallowwater/index.html) | Ensimag | 10 | Bac+4 | 4 | 2013 |

</div>

{::options parse_block_html="false" /}
