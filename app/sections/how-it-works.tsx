'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, Camera, Video, CheckCircle, ArrowRight } from 'lucide-react'
import { T } from '@/components/diversity/diversity-provider'

const steps = [{'step': '1', 'title': 'Tell us about the property', 'description': 'Share the address, your concern and available access. It is fine if you do not know where the cleanout is.'}, {'step': '2', 'title': 'Agree on scope and price', 'description': 'We confirm the lines or system to inspect, suitable access and any separately approved charges.'}, {'step': '3', 'title': 'Inspect and document', 'description': 'We inspect the accessible portions and record what we can see. An obstruction or inaccessible section is documented.'}, {'step': '4', 'title': 'Review the findings', 'description': 'We explain the recording, observed conditions, possible causes and the limits of the inspection.'}, {'step': '5', 'title': 'Choose your next step', 'description': 'No additional work may be needed. If options remain, you choose what happens and who performs it.'}]


export default function HowItWorks() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="psi alt" data-screen-label="How It Works">
      <div className="container">
        
        {/* Replaced old SectionHeading with the exact design system DOM structure */}
        <div className="section-head">
          <span className="eyebrow"><T>How It Works</T></span>
          <h2 className="psi"><span className="rule"></span><T>From your question to documented findings</T></h2>
          <p className="lede"><T>A clear scope at the start. A recording and explanation at the finish.</T></p>
        </div>

        <div ref={ref} className="steps-wrap">
          {/* Connector line exactly as specified in the CSS */}
          <div className="connector"></div>

          <div className="steps">
            {steps?.map((step, index) => {
              // Extracting icon to prevent unused variable warnings, though UI now uses typography lockup
              // Steps are numbered in reading order.
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.2, ease: "easeOut", delay: index * 0.15 }}
                  className="step"
                >
                  <div className="num-block">
                    <span className="stepN"><T>{`Step 0${step?.step ?? index + 1}`}</T></span>
                    {step?.step ?? index + 1}
                  </div>
                  
                  <h3><T>{step?.title ?? ''}</T></h3>
                  <p><T>{step?.description ?? ''}</T></p>
                </motion.div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
