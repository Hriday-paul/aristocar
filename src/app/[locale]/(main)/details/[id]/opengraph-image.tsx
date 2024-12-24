import { ImageResponse } from 'next/og'

export const runtime = 'edge'

// Image metadata
export const alt = 'About Car'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {

  return new ImageResponse(
    (
      // ImageResponse JSX element
      // <div
      //   style={{
      //     fontSize: 128,
      //     background: 'white',
      //     width: '100%',
      //     height: '100%',
      //     display: 'flex',
      //     alignItems: 'center',
      //     justifyContent: 'center',
      //   }}
      // >
      //   <img src='https://aristocar.vercel.app/home/sec1_car.png' alt='car image' className='h-full w-full' />
      //   About Acme
      // </div>
      <div className="max-w-md mx-auto border rounded-lg shadow-lg overflow-hidden bg-white">
        <div className="relative">

          <img
            className="w-full h-48 object-cover"
            src="https://aristocar.vercel.app/home/sec1_car.png"
            alt="2019 Toyota Camry SE exterior view"
          />
          <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent text-white p-4">
            <h1 className="text-lg font-bold">2019 Toyota Camry SE</h1>
          </div>
        </div>
        <div className="p-4">

          <p className="text-gray-600 text-sm">
            A reliable and fuel-efficient sedan featuring a 2.5L 4-cylinder engine,
            8-speed automatic transmission, and advanced safety features.
          </p>

          <a
            href="https://example.com/car/2019-toyota-camry-se"
            className="block mt-3 text-blue-500 hover:text-blue-700 text-sm font-medium"
          >
            https://example.com/car/2019-toyota-camry-se
          </a>
        </div>
      </div>

    ),
    {
      ...size
    }
  )
}