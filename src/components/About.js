import React from 'react'
import abt from '../components/about.module.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
  <div className={abt.v1_2012}>
    <div className={abt.v1_3012} />
    <div className={abt.v1_12012}>
      <div className={abt.v1_13012} />
      <div className={abt.v1_14012} />
    </div>
    <div className={abt.v1_15012} />
    <div className={abt.v1_16012} />
    <div className={abt.v1_17012} />
    <Link to="/secondnew"><span className={abt.v1_190012}>Groups</span></Link>
    <Link to="/fourth"><span className={abt.v1_191012}>Final Race</span></Link>
    <Link to="/contactpage"><span className={abt.v1_194012}>Contact</span></Link>
    <Link to="/"><div className={abt.v1_195012} /></Link>
    <Link to="/leader"><span className={abt.v1_196012}>Leader boards</span></Link>
    <div className={abt.v1_197012} />
    <div className={abt.v1_9012}>
    <Link to="/loginpage"><span className={abt.v1_10012}>Sign in</span></Link>
      <div className={abt.v1_11012} />
    </div>
    <span className={abt.v1_198012}>About</span>
    <span className={abt.v1_198012a}>Us</span>
    <span className={abt.v1_199012}>Our</span>
    <span className={abt.v1_199012a}>Vision</span>
    <div className={abt.v1_200012}>
      <div className={abt.v1_201012} />
      <span className={abt.v1_202012}>
        AWS DeepRacer gives you an interesting and fun way to get started with
        reinforcement learning (RL). RL is an advanced machine learning (ML)
        technique that takes a very different approach to training models than
        other machine learning methods. Its super power is that it learns very
        complex behaviors without requiring any labeled training data, and can
        make short term decisions while optimizing for a longer term goal.
      </span>
    </div>
    <span className={abt.v1_203012}>Our</span>
    <span className={abt.v1_203012a}>Mission</span>
    <span className={abt.v1_204012}>
      AWS DeepRacer is an autonomous 1/18th scale race car designed to test RL
      models by racing on a physical track. Using cameras to view the track and
      a reinforcement model to control throttle and steering, the car shows how
      a model trained in a simulated environment can be transferred to the
      real-world.
    </span>
    <span className={abt.v1_205012}>
      AWS DeepRacer Evo is the next generation in autonomous racing. It comes
      fully equipped with stereo cameras and LiDAR sensor to enable object
      avoidance and head-to-head racing, giving developers everything they need
      to take their racing to the next level. In object avoidance races,
      developers use the sensors to detect and avoid obstacles placed on the
      track.{" "}
    </span>
  </div>
    </div>
  )
}

export default About