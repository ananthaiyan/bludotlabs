import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {

    return {

        name: "Bludot Labs",

        short_name: "Bludot",

        theme_color: "#081321",

        background_color: "#081321",

        display: "standalone",

        icons: [

            {

                src: "/icon.png",

                sizes: "512x512",

                type: "image/png"

            }

        ]

    };

}