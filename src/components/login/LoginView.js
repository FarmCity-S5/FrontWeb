import { FaRegUser  , FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import './login.css';

export default function LoginView() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    
    const nom = formData.get('nom');
    const password = formData.get('password');

    if (!nom || !password) {
      alert("Veuillez remplir tous les champs");
      return;
    }


    try {
      const url = `https://farmcity.up.railway.app/utilisateur?name_user=${nom}&pass_word=${password}`;
      const response = await fetch(url);

      if (!response.ok) {
        const errorText = await response.text();
        // Affichage d'une erreur plus précise
        if (response.status === 401) {
          alert("Nom d'utilisateur ou mot de passe incorrect");
          } else {
            alert(`Erreur : ${errorText}`);
          }
          return;
      }else{
        const user = await response.json();
        localStorage.setItem("utilisateur", JSON.stringify(user));
        navigate("/");
        console.log(`Utilisateur trouvé : ${JSON.stringify(user)}`);
      }

      } catch (error) {
        console.error(error);
        alert("Authentification incorrecte ! ");
    }

    console.log(`Nom : ${nom}`);
    console.log(`Mot de passe : ${password}`);
  }

  return(
    <div className="login">
      <div className="login__image">
        <img src="./logo.png" alt=""/>
      </div>
      
      <div className="login__form">
        <div className="login__form__title">
          <h2>Welcome to Farm City</h2>
          <p className="instruction">Please log in or register if you don't have an account.</p>
        </div>

        <div className="login__form__divider"></div>

        <form onSubmit={handleSubmit}>
          <div className="login__form__input">
            <span><FaRegUser className="icon"></FaRegUser></span>
            <input type="text" name="nom" value="Fanilo"></input>
          </div>

          <div className="login__form__input">
            <span><FaRegEyeSlash className="icon"></FaRegEyeSlash></span>
            <input type="password" name="password" value="1234"></input>
          </div>
      
          <div className='login__form__button'>
            <p>
              <button className="submit" type="submit">Valider</button>
            </p>          
          </div>
        </form>
      </div>

    </div>
  );
}
