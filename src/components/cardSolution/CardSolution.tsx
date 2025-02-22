import React from 'react'

const CardSolution = () => {
  return (
   <>
    <article>
      <div>
        <i>icono</i>
        <h6>Title</h6>
        <p>description</p>
        <a href='#' aria-label="Ver beneficios">Ver Beneficios</a>
      </div>
      <div>
        <h6>Beneficios</h6>
        <ul>
          <li>Beneficio 1</li>
          <li>Beneficio 2</li>
        </ul>
        <a href='#' aria-label='Más información'></a>
      </div>
    </article>
   </>
  )
}

export default CardSolution