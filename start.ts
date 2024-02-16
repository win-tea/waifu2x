import waifu2x from "./waifu2x"
import path from "path"

const start = async () => {
    const progress = (current: number, total: number) => {
        console.log(`${current}/${total}`)
    }
    const result = await waifu2x.upscaleImage("./images/img.png", "./images/upscale/img2x.png", {scale: 4, upscaler: "real-cugan"})
    //const result = await waifu2x.pdfDimensions("./images/pdfs/pdf.pdf", {downscaleHeight: 1000})
    console.log(result)
}
start()