import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({children}) => {
   const [ cart, setCart ] = useState(null);
   const mockApi = [
    { 
      id: 'media',
     category: 'Media',
     subcategories: ['Print Media', 'Electronics Media', 'Digital Media', 'PR Services'],
     image: 'https://social-media-wb.netlify.app/images/MediaMarketing.webp'
   },
   { 
      id: 'advertising',
      category: 'Advertising',
      subcategories: [
       'Outdoor Advertising',
       'Signage Advertising',
       'Transit Advertising',
       'Non Traditional Advertising',
       'Hoarding Advertising'
     ],
     image: 'https://social-media-wb.netlify.app/images/advertisingimg.jpg'
   },
   {
     id: 'marketing',
     category: 'Marketing',
     subcategories: ['Branding Services', 'Graphic Design', 'LeafLets & Canopy'],
     image: 'https://social-media-wb.netlify.app/images/Marketingg.jpg'
   },
   {
     id: 'event',
      category: 'Event',
     subcategories: ['Workshop', 'Conference', 'Shows', 'Exhibitions', 'Cultural', 'Sports'],
     image: 'https://social-media-wb.netlify.app/images/event.webp'
   },
   {
     id: 'entertainment',
      category: 'Entertainment',
     subcategories: ['Podcast', 'Ad Films', 'Short Stories', 'Web Series', 'Content Creation'],
     image: 'https://social-media-wb.netlify.app/images/Entertainment.jpg'
   }
    ];


   return (
     <CartContext.Provider value={{cart, setCart, mockApi}}>
        {children}
     </CartContext.Provider>
   ) 
}

export const useCart = () => useContext(CartContext);