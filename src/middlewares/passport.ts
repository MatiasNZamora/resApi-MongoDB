import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import config from '../config/config';
import User from '../models/user';

const opts:StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:config.JWTSecret
};

export default new Strategy(opts, async (payload, done) => {
    try {
        const user = await User.findById(payload.id)
        // lo que hace es extraer el id del payload y luego lo busca dentro de la base de datos 
        if(user){
            return done(null, user);
        };
        return done(null,false);
    } catch (error) {
        console.log(error);
    }
});

// El payload es el objeto guardado por la funcion createToken que pone dentro del token los valores de user.id, user.email 