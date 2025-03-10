import UseGetCarDetails from '@/Hooks/UseGetCarDetails'
import { ImageResponse } from 'next/og'
import { carDetailsI } from './@cardetails/page'

export const runtime = 'edge'

// Image metadata
export const alt = 'About Car'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Image generation
export default async function Image({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const { data } = await UseGetCarDetails(id) as { data: { car: carDetailsI } }

  const carName = data?.car?.name || 'Car Name'
  const carDetails = data?.car?.details || 'Car details are unavailable.'
  const carImage = data?.car?.images?.[0]?.url || 'https://via.placeholder.com/1200x630?text=No+Image'
  // const carImage = 'https://img.jamesedition.com/listing_images/2025/02/11/14/47/45/c2ae9453-8af0-44c6-9afd-62eb2afd2b09/je/1900xxs.jpg'

  return new ImageResponse(
    (
      <div
        style={{
          width: size.width,
          height: size.height,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#f9f9f9',
          fontFamily: 'Arial, sans-serif',
          position: 'relative',
        }}
      >
        <img
          src={carImage}
          alt={carName}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            zIndex: -1,
          }}
        />

        <div
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: '50%',
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)',
            zIndex: 1,
          }}
        />



        <div
          style={{
            position: 'absolute',
            bottom: '5%',
            width: '90%',
            textAlign: 'center',
            color: '#ffffff',
            zIndex: 2,
          }}
        >
          {carName}

          {/* {carDetails} */}

        </div>


      </div >
    ),
    {
      width: 1200,
      height: 630,
    }
  );

}












// return new ImageResponse(
//   (
//     <div
//       style={{
//         width: size.width,
//         height: size.height,
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#f9f9f9',
//         fontFamily: 'Arial, sans-serif',
//         position: 'relative',
//         textAlign: 'center',
//         padding: '20px',
//       }}
//     >
//       {/* Background Image */}
//       <img
//         src={carImage}
//         alt={carName}
//         style={{
//           position: 'absolute',
//           width: '100%',
//           height: '100%',
//           objectFit: 'cover',
//           top: 0,
//           left: 0,
//           // zIndex: 0, // Ensure this is unitless
//         }}
//       />

//       {/* Overlay with Car Name and Details */}
//       <div
//         style={{
//           position: 'relative',
//           backgroundColor: 'rgba(0, 0, 0, 0.6)',
//           color: 'white',
//           padding: '20px',
//           borderRadius: '10px',
//           // zIndex: 1, // Ensure this is unitless
//         }}
//       >
//         <h1 style={{ fontSize: '40px', margin: 0 }}>{carName}</h1>
//         <p style={{ fontSize: '20px', margin: '10px 0' }}>{carDetails}</p>
//       </div>
//     </div>
//   ),
//   {
//     ...size,
//   }
// )
