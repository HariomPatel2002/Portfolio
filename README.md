# Developer Portfolio

A dark, minimal developer portfolio built with React, Tailwind CSS, and Framer Motion.

## Tech Stack
- React 18 + Vite
- Tailwind CSS
- Framer Motion
- React Hook Form
- EmailJS (contact form)

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file with your EmailJS credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Run development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

## Customization

- Update personal info in components
- Add your profile photo to `public/images/profile.jpg`
- Add project screenshots to `public/images/`
- Replace `<YourName />` with your actual name

## Deploy to Vercel

1. Push to GitHub
2. Import repo in Vercel
3. Add environment variables
4. Deploy