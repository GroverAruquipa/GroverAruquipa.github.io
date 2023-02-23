---
layout: post
title: Research
icon: fas fa-microscope
order: 1
math: true
---

# Master main subject

**Measure the pose of periodic patterns by using the phase information contained in the spectrum of the Fourier transform**

**Main goals of research :**

- Provide a **6 DoF pose measure** with highly subpixelic resolutions
- **Extend the range of measure** to 10 cm
- **Increase the robustness** of the pose measure
- Provide a versatile and convenient tool for microrobotics applications

<video src="../media/parallel_robots/first_prototype_tricept_Trim.mp4" width="75%" controls autoplay loop></video>

## Performances

This method was tested through both simulations and experimentations and **performances of pose measurement resolutions** can be summarized as follow:

| Axis     | Resolution    | Range of measure |
| -------- | ------------- | ---------------- |
| $x$      | 1 nm          | 11.6 cm          |
| $y$      | 1 nm          | 11.6 cm          |
| $z$      | < 0.1 mm      | /                |
| $\alpha$ | 4.1 $\mu$rad. | $2\pi$ rad.      |
| $\beta$  | 120 $\mu$rad. | $\pi/8$ rad.     |
| $\gamma$ | 118 $\mu$rad. | $\pi/8$ rad.     |

## Theory behind the pose measurement method

The methods of pose measurement based on the periodic patterns phase evolution are detailled in the following posts:

- [1D phase measurement process](https://antoineandre.github.io/posts/1DPhaseMeasurement/) (1 DoF) - _TBD_
- 2D phase measurement process (3 DoF) - _TBD_
- Extension to 6 DoF pose measurement based on the frequency peaks localization - _TBD_
- Robust extension of the range of measure - _TBD_

## C++ Library to compute periodic pattern poses

In order to make this tool as versatile and available as possible, a `C++ library` was developed.

- More on this in [this post](https://antoineandre.github.io/posts/vernierLibrary/)
- More details can also be found directly on the `Vernier Library` [website](https://projects.femto-st.fr/vernier/en)

## 1D pose measurement _Matlab_ function

To provide as much explanations as possible on the method of pose measurement based on the periodic patterns phase, a _Matlab_ function was programmed. The code behind the 1D phase measurement is compared with other classic methods of **phase determination**.

**This version is open source** and can be found on [this](https://github.com/AntoineAndre/1D_phase_measurement) github repository. Feel free to try it !

![](../media/industrial_ROS/kukaros1.PNG)

# Applications to microrobotics

## Microrobot calibration

Performances study on the most resolute planar continuum robot with the largest range of actuation

<video src="../media/parallel_robots/first_prototype_tricept_Trim.mp4" width="75%" controls autoplay loop></video>

Research was conducted by Benjamin Mauzé during his PhD and showed the nanometric resolutions of the robot with a centimetric range.

[1] Mauzé, B., Dahmouche, R., Laurent, G. J., André, A. N., Rougeot, P., Sandoz, P., & Clévy, C. (2020). **Nanometer precision with a planar parallel continuum robot.**, _IEEE Robotics and Automation Letters_, 5(3), 3806‑3813., DOI [10.1109/LRA.2020.2982360](https://doi.org/10.1109/LRA.2020.2982360)

## Force sensing

### 1D force - displacement sensing

Force sensing using compliant structures to link linearly the displacement and the force is particularly interesting, especially when combined with the high resolution allowed by periodic patterns pose sensing.

This method of highly resolute force sensing has notably been studied by Guelpa to provide a sensor with a range of 50 mN with a resolution of 5 nM.

<img src="../media/industrial_ROS/kukaros1.PNG" width="50%">

<img src="../media/industrial_ROS/kukaros2.png" width="90%">

[2] Guelpa, V., Laurent, G. J., Sandoz, P., & Clévy, C. (2015). **Vision-based microforce measurement with a large range-to-resolution ratio using a twin-scale pattern.** _IEEE/ASME Transactions on Mechatronics_, 20(6), 3148-3156., DOI [10.1109/TMECH.2015.2407053](https://doi.org/10.1109/TMECH.2015.2407053)

### 2D force - displacement sensing

More recently, Bhwanath Tiwari extended the degrees of freedom of force - displacement sensors by creating a compliant structure with embedding a **large range periodic pattern** to measure 3 DoF forces and torque with a nano-Newton resolution.


[3] Tiwari, B., Blot, M., Laurent, G. J., Agnus, J., Sandoz, P., Lutz, P., & Clevy, C. T. (2021). **A High Range-to-Resolution Multi-axis Force and Torque Sensing Platform.** _IEEE/ASME Transactions on Mechatronics_. DOI [10.1109/TMECH.2021.3071444](https://doi.org/10.1109/TMECH.2021.3071444)

## High resolution alignment
