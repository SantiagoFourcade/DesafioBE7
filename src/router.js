import {router} from `express`;
import {containerDeCosas} from `./containerDeCosas.js`
import {randomUUID as generarID} from `crypto` 

export const router = Router();


router.post(`/`, async(rez,res) => {
    const nuevoProducto = req.body
    nuevoProducto.id = generarID()
    await containerDeCosas.guardar(nuevoProducto)
    res.json(nuevoProducto);
});

router.get(`/`, async (req,res) => {
    res.json(await containerDeCosas.recuperar())
})
