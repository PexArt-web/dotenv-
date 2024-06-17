const FarmContent = () => {
  return (
    <div className="content card p-4 bg-dark text-light">
      <p>
        Welcome to <span className="text-success">P</span>x poultry farm
        specializing in layers and old layers for meat production. At farm, we
        are dedicated to providing high-quality poultry products while ensuring
        the welfare and health of our birds. Here is a glimpse into what makes
        our poultry farm unique :
      </p>
      <div className="accordion mb-3" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
             Expertise and Experience
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            Our team consists of experienced professionals who understand the nuances of raising healthy layers and old layers for meat and egg production. With years of expertise, we ensure that proper care, nutrition, and management practices are followed to maintain the optimal health and productivity of our birds.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
             Quality Breeds
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            We work with renowned hatcheries to select premium breeds that are known for their exceptional egg-laying capacity or quality. By carefully choosing the right breeds, we guarantee superior performance in terms of egg production or meat yield.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
               Spacious Housing
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            Our layer hens enjoy spacious housing facilities designed specifically to meet their needs. Cleanliness is maintained all times to prevent disease outbreaks while ensuring a comfortable environment for our birds.
            </div>
          </div>
        </div>
        {/*  */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
                Balanced Nutrition
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            We believe that proper nutrition is essential for the well-being of our birds and the quality of their products. Our layers receive a well-balanced diet consisting of high-quality grains, proteins, vitamins, minerals, and supplements necessary for optimal growth, egg production (in case of layers), or muscle development (in case of old layers).
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
               Veterinary Care
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            The health and-being of our birds are closely monitored by qualified veterinarians who conduct regular check-ups and provide necessary vaccinations or treatments as required. This ensures that only healthy birds enter your food supply chain.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              Rorous Biosecurity Measures
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            To protect against potential diseases from external sources, we strictly implement biosecurity protocols on our farm premises including limited access areas, hygiene checkpoints at entry points, regular disinfection routines, controlled visitor policies among others.            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
              Sustainable Practices
            </button>
          </h2>
          <div
            id="collapseSeven"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            We deeply care about environmental sustainability as well as animal welfare on our farm premises.We make efforts towards sustainable waste management practices including composting systems for manure disposal along with energy-efficient methods such as using solar-powered equipment where feasible            
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEight"
              aria-expanded="false"
              aria-controls="collapseEight"
            >
              Product Traceability
            </button>
          </h2>
          <div
            id="collapseEight"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            We prioritize transparency by maintaining accurate records throughout every stage - from sourcing chicks/hens to egg production/meat processing - allowing us to provide complete traceability so you can have full confidence in the safety standards upheld during each step.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseNine"
              aria-expanded="false"
              aria-controls="collapseNine"
            >
              Customer Satisfaction
            </button>
          </h2>
          <div
            id="collapseNine"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            We value customer satisfaction above all else.Our team strives tirelessly towards meeting customer expectations regarding product quality,freshness,and timely delivery.We take pride in building long-term relationships based on trust,reliability,and consistent product excellence
            </div>
          </div>
        </div>
        {/*  */}
      </div>
      <p>
      At our poultry farm dealing with both layer hens producing eggs consistently over time &old layesr repurposed mainly fornmeat purposes.you can be assured that you will receive top products backed by ethical farming practices,careful attention to detail,&commitmentto delivering onlythe finest quality poultry products possible.Join us&experience the difference!
      </p>
    </div>
  );
};

export default FarmContent;
