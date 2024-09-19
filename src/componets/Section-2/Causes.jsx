import React from "react";
import "./custom.css";

const Causes = () => {
  return (
    <div>
      <section id="causes">
        <h2>Causes of Ozone Layer Depletion</h2>
        <div className="container">
          <div className="box scroll-effect">
            <h3>
              <i className="fas fa-cloud-sun"></i> Chlorofluorocarbons (CFCs)
            </h3>
            <p>
              CFCs are released into the atmosphere through industrial
              activities. They break down ozone molecules, leading to ozone
              depletion.
            </p>
          </div>
          <div className="box scroll-effect">
            <h3>
              <i className="fas fa-fire-extinguisher"></i> Halons
            </h3>
            <p>
              Halons, used in fire extinguishers, release bromine atoms, which
              are even more destructive to ozone than chlorine.
            </p>
          </div>
          <div className="box scroll-effect">
            <h3>
              <i className="fas fa-leaf"></i> Nitrous Oxide
            </h3>
            <p>
              Emissions from agriculture and industrial processes release
              nitrous oxide, which also contributes to ozone depletion.
            </p>
          </div>
          <div className="box scroll-effect">
            <h3>
              <i className="fas fa-flask"></i> Methyl Chloroform
            </h3>
            <p>
              Used as a solvent in industries, this chemical also harms the
              ozone layer.
            </p>
          </div>
          <div className="box scroll-effect">
            <h3>
              <i className="fas fa-industry"></i> Carbon Tetrachloride
            </h3>
            <p>
              Previously used in industrial applications, carbon tetrachloride
              contributes significantly to ozone layer depletion.
            </p>
          </div>
          <div className="box scroll-effect">
            <h3>
              <i className="fas fa-plane"></i> Nitrogen Oxides (NOx)
            </h3>
            <p>
              Emissions from jet engines and industrial processes release
              nitrogen oxides, which can deplete ozone in the stratosphere.
            </p>
          </div>
        </div>
      </section>

      <section id="prevention">
        <h1>Prevention of Ozone Layer Depletion</h1>
        <div className="container">
          <div className="box scroll-effect">
            <h3>
              <i className="fas fa-recycle"></i> Reduce Use of Ozone-Depleting
              Substances
            </h3>
            <p>
              Avoid products containing CFCs and other harmful chemicals. Opt
              for eco-friendly alternatives in industrial and household
              products.
            </p>
          </div>
          <div className="box scroll-effect">
            <h3>
              <i className="fas fa-thermometer-half"></i> Promote Refrigerant
              Management
            </h3>
            <p>
              Ensure proper maintenance and disposal of refrigerants used in air
              conditioning and refrigeration systems to prevent leakage.
            </p>
          </div>
          <div className="box scroll-effect">
            <h3>
              <i className="fas fa-solar-panel"></i> Support Renewable Energy
            </h3>
            <p>
              Encourage the use of renewable energy sources like solar and wind
              power to reduce dependence on fossil fuels.
            </p>
          </div>
          <div className="box scroll-effect">
            <h3>
              <i className="fas fa-globe"></i> Advocate for Environmental
              Policies
            </h3>
            <p>
              Support and advocate for policies that aim to protect the
              environment and reduce the emission of harmful substances.
            </p>
          </div>
          <div className="box scroll-effect">
            <h3>
              <i className="fas fa-plant"></i> Increase Green Spaces
            </h3>
            <p>
              Promote afforestation and the development of green spaces to
              improve air quality and support the ecosystem.
            </p>
          </div>
          <div className="box scroll-effect">
            <h3>
              <i className="fas fa-water"></i> Conserve Water
            </h3>
            <p>
              Implement water-saving practices to reduce pollution and conserve
              natural resources, helping maintain a balanced ecosystem.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Causes;
