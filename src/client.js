
import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
    projectId: 'kfdyw3h2',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-12-15',
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
    console.log(source);
    return builder.image(source)
}

export async function fetchAbouts() {
    const query = `*[_type=="abouts"]`
    const aboutsData = await client.fetch(query);
    return aboutsData;
}

export async function fetchSkills() {
    const query = `*[_type=="skills"]`
    const skillsData = await client.fetch(query);
    console.log(skillsData)
    return skillsData
}


export default client