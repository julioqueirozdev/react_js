import { useState } from "react";
import { categories } from "../Category";
import styles from "./Form.module.css";

function Form() {
  // ambos states servirão para armazenar os dados dos campos dos formulários
  const [url, setUrl] = useState('')
  const [category, setCategory] = useState('')
  const [videos, setVideos] = useState([])
  const [errors, setErrors] = useState('')

  // validar a url
  function valideUrl(url){
    const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/

    if(!regex.test(url) || url.lenght < 43){
      setErrors('Erro: URL inválida!')
      return false
    } else {
      return url.substring(32, 43) //se a url for verdadeira, salvamos os caracteres de 32 a 43 que é o id do vídeo
    }

  }


    function onSave(e){
      e.preventDefault() // impedimos o navegador de atualizar sozinho após submeter os dados
      console.log(url, category)
      
         // validar category
         if(!category || category==='-'){
          setErrors('ERRO: Escolha uma categoria!')
          return
        } else {
          setErrors('')
        }
        

      // validar url
      const urlVideo = valideUrl(url)
      if(urlVideo && category) {
          //salvar os dados
          const newVideo = {url, category}
          setVideos([...videos, newVideo])
          //persistencia de dados com localStorage
          localStorage.setItem('videos',JSON.stringify([...videos, newVideo]))
          // limpar o form
          setUrl('')
          setCategory('')
      } else {
          setErrors('ERRO: URL inválida!')
      }
    }
  
  return(
    <section className={styles.container}>
      <h2>Cadastro de Vídeo</h2>
      <form onSubmit={onSave}>
        <div>
          <label>Url do Vídeo</label>
          <input
            type="text"
            placeholder="Digite a URL do vídeo"
            required="required"
            value={url}
            onChange={e => setUrl(e.target.value)}
            minLength="43"
            maxLength="43"
          />
        </div>
        <div>
          <label>Categoria</label>
          <select
          required="required"
          value={category}
          onChange={e => setCategory(e.target.value)}
          >
            <option value="-">Selecione uma categoria:</option>
            {/* mapeamento das categorias */}
            {categories.map(item => {
                return <option value={item}>{item}</option>
            })}
          </select>
        </div>
        <div>
            <button>Cadastrar</button>
        </div>
        <div>
            {errors}
        </div>
      </form>
    </section>
  );
}

export default Form;
