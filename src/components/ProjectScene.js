"use client"
import  TiltGalleryLoop from '@/components/tiltGallaryLoop';
import ScrollFloatHeader from './ScrollFloatHeader';

export default function ProjectScene() {

    const projectList = [
        {
          image: 'https://images.unsplash.com/photo-1688733720228-4f7a18681c4f?q=80&w=2487&auto=format&fit=crop',
          name: 'MSMEDhara',
          description: 'MSMEDhara is an AI-powered platform that helps MSME enterprises start exporting and expand into global trade by providing insights, market analysis, and trade recommendations.',
          tech: ['next.js', 'figma', 'python', 'ai'],
          github: 'https://github.com/example/alpha',
          linkedin: 'https://www.linkedin.com/posts/kedron-lucas_ai-ml-hackathonwinner-activity-7302069361324736512-OZh-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETdTr4Bbb0FNngGAWLvDxiWctGt6nQKXD4'
        },
        {
          image: 'https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=2487&auto=format&fit=crop',
          name: 'SafeSign',
          description: 'SafeSign is a secure multi-signature smart contract wallet tailored for businesses and project teams. It enforces m-of-n approval for transactions, integrates reentrancy protection, and supports automated execution—ensuring that no action is taken without proper consensus.',
          tech: ['solidity', 'ether.js', 'Ethereum ', 'OpenZeppelin ', 'Metamask '],
          github: 'https://github.com/k3Dron/blockchain/blob/main/pro002/MultiDigWallet/MultiSigWallet.sol',
          linkedin: 'https://www.linkedin.com/posts/kedron-lucas_weekendproject-weekendproject-blockchain-activity-7281576532144242690-r4na?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETdTr4Bbb0FNngGAWLvDxiWctGt6nQKXD4',
        },
        {
          image: 'https://images.unsplash.com/photo-1726066012698-bb7a3abce786?q=80&w=2487&auto=format&fit=crop',
          name: 'Sup-Chain',
          description: 'Sup-Chain is a blockchain-powered supply chain management solution that replaces traditional centralized systems like Oracle with a decentralized, tamper-proof network.',
          tech: ['solidity', 'ether.js', 'Ethereum ', 'OpenZeppelin ', 'Metamask '],
          github: 'https://github.com/k3Dron/blockchain/blob/main/pro003/SupplyChainTracking/SupplyChainTracking.sol',
          linkedin: 'https://www.linkedin.com/posts/kedron-lucas_codeuntilchristmas-codeuntilchristmas-blockchain-activity-7277324438851788800-D0tu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5e1ZkBeqMRe_LyMKjEIzZLS1BBnoTGCS8',
        },
        {
          image: 'https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=2487&auto=format&fit=crop',
          name: 'deBay',
          description: 'deBay is a decentralized alternative to traditional auction platforms like eBay. ',
          tech: ['solidity', 'ether.js', 'Ethereum ', 'OpenZeppelin ', 'Metamask '],
          github: 'https://github.com/k3Dron/blockchain/blob/main/pro002/dAuction/DecentralizedAuction.sol',
          linkedin: 'https://www.linkedin.com/posts/kedron-lucas_codeuntilchristmas-codeuntilchristmas-blockchain-activity-7277021799312187392-XCJT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5e1ZkBeqMRe_LyMKjEIzZLS1BBnoTGCS8',
        },
        {
          image: 'https://images.unsplash.com/photo-1726066012698-bb7a3abce786?q=80&w=2487&auto=format&fit=crop',
          name: 'Lo-Fi',
          description: 'Lo-Fi is a decentralized finance (DeFi) application that reimagines lending and borrowing. By using blockchain and smart contracts, it removes traditional barriers such as credit scores, lengthy approvals, and intermediaries.',
          tech: ['solidity', 'ether.js', 'Ethereum ', 'OpenZeppelin ', 'Metamask '],
          github: 'https://github.com/k3Dron/blockchain/blob/main/DecentralizedVoting.sol',
          linkedin: 'https://www.linkedin.com/posts/kedron-lucas_codeuntilchristmas-codeuntilchristmas-codeuntilchristmas-activity-7276687156020961280-Z9Pq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5e1ZkBeqMRe_LyMKjEIzZLS1BBnoTGCS8',
        },
        {
          image: 'https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=2487&auto=format&fit=crop',
          name: 'Breast Cancer Diagnosis',
          description: 'Logistic regression proves to be a powerful tool in healthcare analytics, especially for binary classification problems like distinguishing between benign and malignant tumors.',
          tech: ['Machine Learning', 'python', 'AI ', 'pandas', 'numpy'],
          linkedin: 'https://www.linkedin.com/posts/kedron-lucas_codeuntilchristmas-codeuntilchristmas-datascience-activity-7276080798154346496--aqy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5e1ZkBeqMRe_LyMKjEIzZLS1BBnoTGCS8',
        },
        {
          image: 'https://images.unsplash.com/photo-1688733720228-4f7a18681c4f?q=80&w=2487&auto=format&fit=crop',
          name: 'TrustVote',
          description: 'TrustVote is a prototype that enhances Indias Electronic Voting Machine (EVM) system by adding a blockchain-based trust layer. Built using Solidity and deployed on Remix IDE, it encrypts each vote and stores its hash on an immutable blockchain ledger—ensuring transparency, auditability, and decentralization.',
          tech: ['solidity', 'ether.js', 'Ethereum ', 'OpenZeppelin ', 'Metamask '],
          github: 'https://github.com/k3Dron/blockchain/blob/main/pro002/dEVM/DecentralizedVoting.sol',
          linkedin: 'https://www.linkedin.com/posts/kedron-lucas_codeuntilchristmas-codeuntilchristmas-codethehalls-activity-7275839101243678721-CAjE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5e1ZkBeqMRe_LyMKjEIzZLS1BBnoTGCS8',
        },
        {
          image: 'https://images.unsplash.com/photo-1726066012698-bb7a3abce786?q=80&w=2487&auto=format&fit=crop',
          name: 'Peer-Hive',
          description: 'Peer-Hive is THE platform where student associations, councils, and clubs can finally stop running around. Its where you can share info, discuss plans, manage tasks, and actually keep track of whats going on—all in one place. Basically, its like having that one super-organized friend, but now theyre working for you',
          tech: ['AI', 'ML', 'python ', 'Next.js ', 'Tailwind CSS', 'MongoDB'],
          github: 'https://github.com/harshsawant2505/Peer-Hive',
          linkedin: 'https://www.linkedin.com/posts/kedron-lucas_chaosnomore-stopjugglingapps-headlesschickensnomore-activity-7266393490547187712-UNT9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5e1ZkBeqMRe_LyMKjEIzZLS1BBnoTGCS8'
        },
        {
          image: 'https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=2487&auto=format&fit=crop',
          name: 'TourTorch',
          description: 'TourTorch is a platform that allows tourists to explore areas more effectively, offering a gamified experience experiences. It uses AI to help them explore based on their interests and preferences, ensuring a unique and memorable travel experience.',
          tech: ['AI', 'ML', 'python ', 'Next.js ', 'Tailwind CSS', 'MongoDB'],
          github: 'https://github.com/harshsawant2505/tourist-platform',
          linkedin: 'https://www.linkedin.com/posts/kedron-lucas_hackathonjourney-teamnosleep-tourismtech-activity-7253378936703746048--J7A?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETdTr4Bbb0FNngGAWLvDxiWctGt6nQKXD4'
        },
        {
          image: 'https://images.unsplash.com/photo-1726066012698-bb7a3abce786?q=80&w=2487&auto=format&fit=crop',
          name: 'Movie Recommendation Model 2.0',
          description: 'This project is a movie recommendation system that uses stacked Autoencoder with multiple layers to capture complex patterns in user ratings to suggest movies based on user preferences.',
          tech: ['AI', 'ML', 'python ','numpy', 'pandas', 'pytorch'],
          linkedin: 'https://www.linkedin.com/posts/kedron-lucas_machinelearning-datascience-ai-activity-7248755888096772097-dt44?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETdTr4Bbb0FNngGAWLvDxiWctGt6nQKXD4'
        },
        {
          image: 'https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=2487&auto=format&fit=crop',
          name: 'Parking Vacancy Finder',
          description: 'This project is a web application that helps users find available parking spaces in real-time. It uses AI to analyze parking data and provide accurate predictions of parking availability.',
          tech: ['AI', 'ML', 'python ', 'Next.js ', 'Tailwind CSS', 'MongoDB'],
          github: 'https://github.com/harshsawant2505/vacancyApp',
          linkedin: 'https://www.linkedin.com/posts/kedron-lucas_innovation-techforgood-ml-activity-7246196597947039747-pTfR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETdTr4Bbb0FNngGAWLvDxiWctGt6nQKXD4'
        },
        {
          image: 'https://images.unsplash.com/photo-1688733720228-4f7a18681c4f?q=80&w=2487&auto=format&fit=crop',
          name: 'Movie Recommendation Model',
          description: 'This project is a movie recommendation system that uses Boltzmann Machines, with a special focus on Restricted Boltzmann Machines (RBMs) to capture complex patterns in user ratings to suggest movies based on user preferences.',
          tech: ['AI', 'ML', 'python', 'numpy', 'pandas', 'pytorch'],
          linkedin: 'https://www.linkedin.com/posts/kedron-lucas_boltzmann-netflix-ai-activity-7241526284273475584-x5UD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETdTr4Bbb0FNngGAWLvDxiWctGt6nQKXD4',
        },
        {
          image: 'https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=2487&auto=format&fit=crop',
          name: 'Cannon Website Redesigned',
          description: 'This project is a complete redesign of the Cannon website, focusing on enhancing user experience and modernizing the design.',
          tech: ['UI', 'UX', 'Figma ', 'Next.js ', 'Tailwind CSS'],
          linkedin: 'https://www.linkedin.com/posts/kedron-lucas_i-am-excited-to-announce-we-cleared-the-1st-activity-7222300656106135552-NHJK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETdTr4Bbb0FNngGAWLvDxiWctGt6nQKXD4',
          link: 'https://straw-hats-reimagine-round2.vercel.app/',
        },
        {
          image: 'https://images.unsplash.com/photo-1726066012698-bb7a3abce786?q=80&w=2487&auto=format&fit=crop',
          name: 'Fraud Detection',
          description: 'This project implements a self-organizing map (SOM) to detect fraudulent transactions in financial datasets. The SOM is trained on transaction data to identify patterns and anomalies that indicate potential fraud.',
          tech: ['AI', 'ML', 'python', 'numpy', 'pandas', 'pytorch'],
          linkedin: 'https://www.linkedin.com/posts/kedron-lucas_fraud-detection-using-self-organizing-activity-7215674301692141569-CxV8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETdTr4Bbb0FNngGAWLvDxiWctGt6nQKXD4',
        },
        {
          image: 'https://images.unsplash.com/photo-1688733720228-4f7a18681c4f?q=80&w=2487&auto=format&fit=crop',
          name: 'Amul Website Redesigned',
          description: 'This project is a complete redesign of the Amul website, focusing on enhancing user experience and modernizing the design.',
          tech: ['UI', 'UX', 'Figma ', 'Next.js ', 'Tailwind CSS'],
          linkedin: 'https://www.linkedin.com/posts/kedron-lucas_reimagine-webdesign-coding-activity-7213808294556053505-guje?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETdTr4Bbb0FNngGAWLvDxiWctGt6nQKXD4',
          link: 'https://straw-hats-reimagine-round1.vercel.app/',
        },
        {
          image: 'https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=2487&auto=format&fit=crop',
          name: 'Stock Prediction Model',
          description: 'This project is a stock prediction model that uses Recurrent Neural Networks (RNNs) to analyze historical stock data and predict future stock prices.',
          tech: ['AI', 'ML', 'python', 'numpy', 'pandas', 'pytorch'],
          linkedin: 'https://www.linkedin.com/posts/kedron-lucas_neuralnetworks-machinelearning-deeplearning-activity-7213233621225066496-VJod?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETdTr4Bbb0FNngGAWLvDxiWctGt6nQKXD4',
        },
      ]
    

    return (
    <div className="h-full w-full flex flex-col items-center">
    <ScrollFloatHeader animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
      >
        Missions Done </ScrollFloatHeader>
    <p className="font-sans font-normal text-center text-sm md:text-base mt-4 text-neutral-300 pbutton">Every shinobi has their path, and these are mine. <br></br>
        From solo S-rank coding quests to crafting AI agents, each project here represents a step in my ninja journey. Every mission taught me a new jutsu.
        <br></br>Ready to explore my completed assignments straight from the Hidden Code Village? Check em out—Dattebayo!.</p>
        <div className="h-4 md:h-10"/>
    <TiltGalleryLoop items={projectList} />
    </div>
    )
}