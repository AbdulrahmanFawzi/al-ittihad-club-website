# 🏆 Al-Ittihad Club Fan Website

A modern, responsive fan website for Al-Ittihad Football Club built with Angular. This project provides fans with comprehensive information about the club, including match schedules, news updates, merchandise store, and ticket booking functionality.

## 📝 Project Description

This Angular-based web application serves as a digital hub for Al-Ittihad Club supporters, featuring a clean, Arabic-friendly design with full right-to-left (RTL) support. The website offers an immersive fan experience with real-time updates and easy navigation through various club-related content.

## ✨ Features

### 🏠 Home Page
- Welcome message and club overview
- Featured news and announcements
- Quick access to all main sections
- Beautiful hero section with club branding

### 🎫 Tickets Page
- Browse available match tickets
- View match details (opponent, stadium, date, time)
- Ticket availability status
- Responsive card-based layout
- Dynamic match data through Angular services

### 🛍️ Store Page
- Club merchandise catalog
- Product grid with images and pricing
- Discount calculations and special offers
- Responsive product cards
- Category-based product organization

### 📰 News Page
- Latest club news and updates
- Article summaries with publication dates
- Featured images for each news article
- Easy-to-read Arabic content layout

### ⚽ Matches Page
- Upcoming match fixtures
- Match results and statistics
- Stadium information
- Competition details

### 🏆 Championships Page
- Club trophy showcase
- Historical achievements
- Championship timeline
- Trophy gallery

## 🛠️ Technologies Used

- **Frontend Framework:** Angular 20.0.0
- **Styling:** SCSS (Sass)
- **Markup:** HTML5 with semantic elements
- **Icons:** Font Awesome
- **Routing:** Angular Router
- **Language:** TypeScript
- **Package Manager:** npm
- **Development Tools:** Angular CLI

## 🏗️ Project Structure

```
src/
├── app/
│   ├── home/                 # Home page component
│   ├── tickets/              # Ticket booking page
│   ├── store/                # Merchandise store
│   ├── news/                 # News and updates
│   ├── matches/              # Match fixtures
│   ├── championships/        # Trophy showcase
│   ├── header-nav/           # Top navigation component
│   ├── services/             # Angular services
│   │   ├── match.service.ts  # Match data service
│   │   └── product.service.ts # Product data service
│   ├── app.routes.ts         # Application routing
│   ├── app.config.ts         # App configuration
│   └── app.ts                # Main app component
├── assets/                   # Static assets
│   ├── *.png                 # Club logos and icons
│   ├── *.jpg                 # Match and news images
│   └── *.jpeg                # Product images
├── index.html                # Main HTML file
├── main.ts                   # Application bootstrap
└── styles.scss               # Global styles
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your system:
- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)
- **Angular CLI** (optional, for development)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd itti-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install Angular CLI globally (if not already installed):**
   ```bash
   npm install -g @angular/cli
   ```

### Development Server

To start the development server:

```bash
npm start
```

or

```bash
ng serve
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload when you make changes to the source files.

### Build for Production

To build the project for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Running Tests

To execute unit tests:

```bash
npm test
```

## 🎨 Design Features

- **RTL Support:** Full right-to-left layout for Arabic content
- **Responsive Design:** Mobile-first approach with responsive breakpoints
- **Modern UI:** Clean, contemporary design with club branding
- **Accessibility:** Semantic HTML and ARIA labels
- **Performance:** Optimized images and efficient component architecture

## 📱 Browser Support

This project supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Credits

### Images and Assets
- **Club Logos:** Official Al-Ittihad Club branding
- **Match Images:** Various sports photography sources
- **Product Images:** Merchandise catalog imagery
- **Icons:** Font Awesome icon library

### Special Thanks
- Al-Ittihad Club for inspiration and branding guidelines
- Angular team for the amazing framework
- Font Awesome for the comprehensive icon library

## 📞 Support

For support and questions, please reach out through:
- Project Issues on GitHub
- Community discussions

---

**Built with ❤️ for Al-Ittihad Club fans**

*نادي الاتحاد - العميد*
