// funciones que puedo utilizar en cualquier archivo de mi proyecto
    export const obtenerUsuarios = () => {
        const usuarios = localStorage.getItem('user');
        if (!usuarios){
            return [];
        }
        return JSON.parse(usuarios);
    };

    //export const for obtain the active user
    export const obtenerUsuarioActivo = () => {
        const usuarioActivo = parseInt(localStorage.getItem('user-active'));
        const usuarios = obtenerUsuarios();
        // console.log(usuarioActivo); 
        // console.log(usuarios); 
    
        for (const usuario of usuarios){
            if (usuario.id === usuarioActivo){
                // console.log(usuario);
                return usuario;
            }
        }
        return null;
    };


    export const logout = () => {
        localStorage.removeItem(usuarioActivoKey);    
    };