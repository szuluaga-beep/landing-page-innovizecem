"use client";
import React from "react";
import "./cardAbout.css";
import Image from "next/image";
import { Hand } from "@phosphor-icons/react/dist/ssr";
import { useTranslations } from "next-intl";
import Carousel from "react-bootstrap/Carousel";

interface workers {
  id: string;
  image: string;
  opinion: string;
  position: string;
  workers: string;
}

const CardAbout = () => {
  const t = useTranslations("about");
  const people = t.raw("workersOpinion") as workers[];

  return (
    <>
      <article>
        <main className="fondoCard">
          <Carousel
            variant="dark"
            pause="hover"
            touch={true}
            slide={true}
            indicators={false}
            interval={null}
          >
            {people.map((workers: workers, index: number) => (
              <Carousel.Item key={index}>
                <>
                  <div className="containerImageWorkers" key={index}>
                    <div className="containerIconWorkers">
                      <i className="IconWorkers">
                        <Hand size={32} />
                      </i>
                    </div>
                    <Image
                      className="image-worker"
                      src={workers.image}
                      alt={workers.id}
                      width={300}
                      height={300}
                      loading="lazy"
                    />
                    <p className="helloWorkers">{workers.position}</p>
                  </div>
                  <div className="containerOpinionWorkers">
                    <p className="name-workers"><strong>{workers.id}</strong></p>
                    <p className="opinionWorkers">{workers.opinion}</p>
                  </div>
                </>
              </Carousel.Item>
            ))}
          </Carousel>
        </main>
      </article>
    </>
  );
};

export default CardAbout;
