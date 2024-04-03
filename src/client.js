
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
    return builder.image(source)
}

export async function fetchAbouts() {
    const query = `*[_type=="abouts"]`
    const aboutsData = await client.fetch(query);
    return aboutsData;
}

export async function fetchSkills() {
    try {
        const query = `*[_type=="skills"]`
        const skillsData = await client.fetch(query);
        return skillsData
    }
    catch(err){
        console.log(err);
    }
}

export async function fetchTestimonials() {
    try{
        const query = `*[_type=="testimonials"]`
        const testimonialsData = await client.fetch(query);
        return testimonialsData;
    }
    catch(err){
        console.log(err);
    }
}

export async function fetchWorks() {
    try{
        const query = `*[_type=="works"]`
        const workData = await client.fetch(query);
        return workData
    }
    catch(err){
        console.log(err);
    }
}

export async function fetchProjectType(){
    try{
        const query=`*[_type=="projecttype"]`
        const projectType=await client.fetch(query);
        return projectType
    }catch(err){
        console.log(err);
    }
}


export default client