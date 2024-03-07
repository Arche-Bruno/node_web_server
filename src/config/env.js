
import env from "dotenv"

env.config()

import varEnv from "env-var"

export const envs= {
    PORT: varEnv.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: varEnv.get('PUBLIC_PATH').default('public').asString()

}

