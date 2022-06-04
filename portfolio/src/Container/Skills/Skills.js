import React from 'react'
import './Skills.css'
export default function Skills() {
  return (
    <div className='body-content'>
      <div className='header'>
        <span>Skills ➡ </span>
      </div>

      <div class="sklles-set-1">
        <div className='g'><pre>MERN Skills ➤</pre>
          <div class="bar learning-1" data-skill="MongoDB"></div>
          <div class="bar learning-2" data-skill="Express.js"></div>
          <div class="bar learning-3" data-skill="React.js"></div>
          <div class="bar learning-4" data-skill="Node.js"></div>
        </div>
      </div>

      <div class="sklles-set-2">
        <div className='g'><pre>WEB Skills ➤</pre>
          <div class="bar learning-5" data-skill=" JavaScript"></div>
          <div class="bar learning-6" data-skill=" HTML 5"></div>
          <div class="bar learning-7" data-skill=" CSS 3"></div>
        </div>
      </div>

      <div class="sklles-set-3">
        <div className='g'><pre>DataBase Skills ➤</pre>
          <div class="bar learning-8" data-skill=" Postgres SQL"></div>
          <div class="bar learning-11" data-skill=" RestFull API"></div>
        </div>

      </div>

      <div class="sklles-set-4">
        <div className='g'><pre>Styling Skills ➤</pre>
          <div class="bar learning-9" data-skill=" Material UI"></div>
          <div class="bar learning-10" data-skill=" bootstrap"></div>
        </div>

      </div>
    </div>
  )
}

