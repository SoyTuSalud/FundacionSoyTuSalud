import { db } from '../../../firebase/initConfig'
import {
  addDoc,
  collection,
  getDocs,
  getDoc,
  setDoc,
  doc,
  updateDoc,
} from 'firebase/firestore'
import {Filantropo} from "../filantropos/filantropo";
import firebase from "firebase/compat";
import QuerySnapshot = firebase.firestore.QuerySnapshot;
import {firestore} from "firebase-admin";
import CollectionReference = firestore.CollectionReference;

export const resolversFilantropos = {
  Query: {
    Filantropos: async () => {
      // es el usuario que se creó en query en types
      const querySnapshot = await getDocs(collection(db, 'filantropos'))
      let filantropos : Filantropo[] = []
      querySnapshot.forEach((doc) => {
        filantropos.push(doc.data())
      })
      return filantropos
    },
    Filantropo: async (parent, args : any) => {
      const docRef = doc(db, 'filantropos', args.uid)
      const docSnap = await getDoc(docRef)
      return docSnap.data()
    },
  },
  Mutation: {
    crearFilantropo: async (parent, args) => {
      const usersRef = collection(db, 'filantropos')
      const filantropoCreado = {
        uid: args.uid,
        tipoDocumento: args.tipoDocumento,
        identificacion: args.identificacion,
        nombre: args.nombre,
        celular: args.celular,
        direccion: args.direccion,
        correo: args.correo,
      }
      await setDoc(doc(usersRef, args.uid), filantropoCreado)
      return filantropoCreado
    },
  },
}
