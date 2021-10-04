import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
//import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBuvIojE9SPCx-LSujkN-0fLXuCKke-0ZM",
  authDomain: "newproject-7463d.firebaseapp.com",
  projectId: "newproject-7463d",
  storageBucket: "newproject-7463d.appspot.com",
  messagingSenderId: "137073007181",
  appId: "1:137073007181:web:4dc3cc782ab767e88a5a04",
  measurementId: "G-9RL2H7J3WF"
};
firebase.initializeApp(firebaseConfig);
export const SocialMedia=(provider)=>{
	return firebase.auth().signInWithPopup(provider).then((res)=>{

		return res.user
	}).catch((er)=>{
		return er
	})
}
export const facebookProvider=new firebase.auth.FacebookAuthProvider();
export const githubProvider=new firebase.auth.GithubAuthProvider();
export const googleProvider=new firebase.auth.GoogleAuthProvider();

export function Authenications(){
	const handleAuth =async (provider)=>{
    const res=await SocialMedia(provider);
    console.log(res)
  	}
  	// const providers=[facebookProvider,githubProvider,googleProvider]
  	// const output=providers.map((provider,index)=>
  	// 	<button onClick={()=>handleAuth(provider)} key={index}>fac3</button>)
	return(
		<div>
			<button onClick={()=>handleAuth(facebookProvider)}>facebook</button>
			<button onClick={()=>handleAuth(githubProvider)}>github</button>
			<button onClick={()=>handleAuth(googleProvider)}>google</button>

		</div>
		)
}