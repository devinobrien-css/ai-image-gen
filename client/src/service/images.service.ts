export const imagesService = {
  async createImages(
    params: {
      prompt: string,
      n?: number|undefined,
      size?: string|undefined,
      response_format?: string|undefined,
      user?: string|undefined,
    }
  ) {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}image`,
      {
        method: "POST",
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      },
    );
    return await response.json();
  }
}