import React from "react";
import "./solution.css";
import serviciosData from "../../helpers/data/solution.json";

interface Servicio {
  id: string;
  icon: string;
  servicio: string;
  descripcion: string;
  beneficios: string[];
  enlaceName: string;
  enlace: string;
}

const Solution = () => {
  
  return (
    <>
      <section className="section-solution" id="solutions">
        <h2 className="section-title-solution">Solution Us</h2>
        <article className="article-card-solution">
            {serviciosData.map((servicio: Servicio ) => (
                <main className="card-solution" key={servicio.id}>
                  <div className="info-card-up">
                    <i className={servicio.icon}></i>
                    <h4>{servicio.servicio}</h4>
                    <p>{servicio.descripcion}</p>
                  </div>
                  <details className="details-benefics">
                    <summary className="details-summary-benefics">
                      Ver Beneficios
                    </summary>
                    <div className="info-card-down">
                      <h3>Benefics</h3>
                      <ul>
                        {servicio.beneficios.map((beneficio, i) => (
                          <li key={i}>{beneficio}</li>
                        ))}
                      </ul>
                      <a href={servicio.enlace}>{servicio.enlaceName}</a>
                    </div>
                  </details>
                </main>
        
            ))}
   
        </article>
      </section>
    </>
  );
};

export default Solution;
