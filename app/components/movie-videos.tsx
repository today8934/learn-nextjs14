const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

async function getVideos(id: string) {
    await new Promise((response) => setTimeout(response, 5000))
    const response = await fetch(`${API_URL}/${id}/videos`)
    return response.json()
}

export default async function MovieVideos({id}: {id: string}) {
    const videos = await getVideos(id)
    return <h6>{JSON.stringify(videos)}</h6>
}