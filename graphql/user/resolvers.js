import { db } from '../../firebase/initBack'

export const resolversUsuario = {
  Query: {
    UsuariosTabla: async (parent, args) => {
      const querySnapshot = await db.collection('users').get()
      let usuarios = []
      querySnapshot.forEach((doc) => {
        usuarios.push(doc.data())
      })
      return usuarios
    },
    UsuariosTablaTuHistoria: async (parent, args) => {
      const querySnapshot = await db
        .collection('users')
        .where('formularioTuHistoria', '==', true)
        .get()

      let usuarios = []
      querySnapshot.forEach((doc) => {
        usuarios.push(doc.data())
      })
      return usuarios
    },
    Usuario: async (parent, args) => {
      const querySnapshot = db
        .collection('users')
        .where('uid', '==', args.uid)
        .get()
      return (await querySnapshot).docs[0].data()
    },
  },
  Mutation: {
    crearUsuario: async (parent, args) => {
      const usersRef = db.collection('users').doc()
      const usuarioCreado = {
        nombre: args.nombre,
        uid: args.uid,
        apellidos: args.apellidos,
        identificacion: args.identificacion,
        tipoDocumento: args.tipoDocumento,
        celular: args.celular,
        correo: args.correo,
        formularioTuHistoria: false,
        comunidad: '',
      }
      // await setDoc(doc(usersRef, args.uid), usuarioCreado)
      await usersRef
        .create(usersRef)
        .then((e) => {
          console.log(e.writeTime)
        })
        .catch((err) => {
          console.log(`error creando el dato ${err}`)
        })
      return usuarioCreado
    },
    tuHistoria: async (parent, args) => {
      const usersRef = collection(db, 'users')
      let dataUserUpdate = {
        genero: args.genero,
        fechaNacimiento: args.fechaNacimiento,
        direccion: args.direccion,
        foto: args.foto,
        sisben: args.sisben,
        historiaClinica: args.historiaClinica,
        discapacitado: args.discapacitado,
        victimaViolencia: args.victimaViolencia,
        identidadGenero: args.identidadGenero,
        orientacionSexual: args.orientacionSexual,
        grupoPoblacional: args.grupoPoblacional,
        EPS: args.EPS,
        tuHistoria: args.tuHistoria,
        serviciosSolicitado: args.serviciosSolicitado,
        autorizacionFoto: args.autorizacionFoto,
        recopilacionDatos: args.recopilacionDatos,
        departamento: args.departamento,
        municipio: args.municipio,
        comunidad: '',
        formularioTuHistoria: true,
        fechaSolicitud: new Date().toISOString().split('T')[0],
      }
      await updateDoc(doc(usersRef, args.uid), dataUserUpdate)
      const docRef = doc(db, 'users', args.uid)
      const docSnap = await getDoc(docRef)
      return docSnap.data()
    },
  },
}
