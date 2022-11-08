// Librairies
import React from 'react'
import { useParams } from 'react-router-dom'

export default function Article() {

  const articleId = useParams().id;
  
  return (
  <h1>Mon article n°{articleId}</h1>
  )
}
