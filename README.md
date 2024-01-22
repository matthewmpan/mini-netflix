## Mini-Netflix

This project is a mini version of Netflix built with Next.js and React.

## Prerequisites

Before you begin, ensure you have met the following requirements:

* You have installed the latest version of [Node.js and npm](https://nodejs.org/en/download/). This project was developed with Node.js version 21.2.0.

## Setting Up the OMDb API Key

This application uses the OMDb API to fetch movie data. To run this application, you'll need to generate your own OMDb API key and add it to the application's environment variables.

Follow these steps to set up the OMDb API key:

1. Go to the [OMDb API Key generation page](https://www.omdbapi.com/apikey.aspx).

2. Follow the instructions on the page to generate your API key.

3. Once you have your API key, open the `.env.local` file in the root directory of the project.

4. Add your API key to the `NEXT_PUBLIC_OMDB_API_KEY` variable in the `.env.local` file. It should look like this:

```bash
NEXT_PUBLIC_OMDB_API_KEY='your_api_key_here'
```

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Replace `your_api_key_here` with your actual API key.

5. Save the `.env.local` file. The application will now use your OMDb API key when fetching movie data.

## Getting Started

First, install the dependencies. In the project directory, you can run:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) with your browser to access the application.

## Running in Production Mode

To run the application in production mode, you need to build the application first:

```bash
npm run build
```

After building the application, you can start the server in production mode:

```bash
npm start
```

The application will now run in production mode on [http://localhost:3000](http://localhost:3000).

