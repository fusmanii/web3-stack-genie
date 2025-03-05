
export type ProjectType = 'nft' | 'defi' | 'dao' | 'gaming' | 'ai-web3' | 'social' | 'identity' | 'other';
export type ExperienceLevel = 'beginner' | 'intermediate' | 'advanced';
export type Blockchain = 'ethereum' | 'arweave' | 'solana' | 'polygon' | 'avalanche' | 'cosmos' | 'near' | 'other';
export type UseCase = 'storage' | 'smart-contracts' | 'payments' | 'identity' | 'compute' | 'governance' | 'other';
export type Preference = 'privacy' | 'decentralization' | 'gas-fees' | 'scalability' | 'developer-experience' | 'other';

export interface FormData {
  projectType: ProjectType;
  experienceLevel: ExperienceLevel;
  blockchain: Blockchain;
  useCase: UseCase[];
  preferences: Preference[];
}

export interface Technology {
  id: string;
  name: string;
  description: string;
  category: string;
  url: string;
  logo?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'documentation' | 'tutorial' | 'video' | 'article' | 'github';
  technologies: string[];
}

export interface StackRecommendation {
  id: string;
  title: string;
  description: string;
  technologies: Technology[];
  resources: Resource[];
}

// Sample data for technologies
export const technologies: Technology[] = [
  // Blockchain Networks
  {
    id: 'ethereum',
    name: 'Ethereum',
    description: 'Smart contract platform with the largest developer ecosystem.',
    category: 'blockchain',
    url: 'https://ethereum.org',
    difficulty: 'intermediate'
  },
  {
    id: 'arweave',
    name: 'Arweave',
    description: 'Permanent storage network focused on data permanence.',
    category: 'blockchain',
    url: 'https://arweave.org',
    difficulty: 'intermediate'
  },
  {
    id: 'solana',
    name: 'Solana',
    description: 'High-throughput blockchain with fast transactions and low fees.',
    category: 'blockchain',
    url: 'https://solana.com',
    difficulty: 'advanced'
  },
  {
    id: 'polygon',
    name: 'Polygon',
    description: 'Ethereum scaling solution with lower gas fees.',
    category: 'blockchain',
    url: 'https://polygon.technology',
    difficulty: 'intermediate'
  },
  
  // Smart Contract Languages
  {
    id: 'solidity',
    name: 'Solidity',
    description: 'Object-oriented programming language for Ethereum smart contracts.',
    category: 'language',
    url: 'https://soliditylang.org',
    difficulty: 'intermediate'
  },
  {
    id: 'rust',
    name: 'Rust',
    description: 'Systems programming language for Solana and Arweave development.',
    category: 'language',
    url: 'https://www.rust-lang.org',
    difficulty: 'advanced'
  },
  {
    id: 'move',
    name: 'Move',
    description: 'Safe and flexible language for smart contracts on multiple chains.',
    category: 'language',
    url: 'https://github.com/move-language/move',
    difficulty: 'advanced'
  },
  
  // Development Frameworks
  {
    id: 'hardhat',
    name: 'Hardhat',
    description: 'Development environment for Ethereum software.',
    category: 'framework',
    url: 'https://hardhat.org',
    difficulty: 'intermediate'
  },
  {
    id: 'foundry',
    name: 'Foundry',
    description: 'Blazing fast toolkit for Ethereum application development.',
    category: 'framework',
    url: 'https://getfoundry.sh',
    difficulty: 'intermediate'
  },
  {
    id: 'anchor',
    name: 'Anchor',
    description: 'Framework for Solana smart contract development.',
    category: 'framework',
    url: 'https://www.anchor-lang.com',
    difficulty: 'advanced'
  },
  
  // Storage Solutions
  {
    id: 'ipfs',
    name: 'IPFS',
    description: 'Peer-to-peer hypermedia protocol for content-addressed storage.',
    category: 'storage',
    url: 'https://ipfs.tech',
    difficulty: 'intermediate'
  },
  {
    id: 'arweave-storage',
    name: 'Arweave',
    description: 'Permanent, decentralized file storage network.',
    category: 'storage',
    url: 'https://arweave.org',
    difficulty: 'intermediate'
  },
  {
    id: 'filecoin',
    name: 'Filecoin',
    description: 'Open-source, public cryptocurrency and digital payment system.',
    category: 'storage',
    url: 'https://filecoin.io',
    difficulty: 'advanced'
  },
  
  // Wallets & Authentication
  {
    id: 'metamask',
    name: 'MetaMask',
    description: 'Crypto wallet & gateway to blockchain apps.',
    category: 'wallet',
    url: 'https://metamask.io',
    difficulty: 'beginner'
  },
  {
    id: 'phantom',
    name: 'Phantom',
    description: 'Friendly Solana wallet built for DeFi & NFTs.',
    category: 'wallet',
    url: 'https://phantom.app',
    difficulty: 'beginner'
  },
  {
    id: 'arconnect',
    name: 'ArConnect',
    description: 'Browser extension wallet for Arweave.',
    category: 'wallet',
    url: 'https://arconnect.io',
    difficulty: 'beginner'
  },
  {
    id: 'wander',
    name: 'Wander',
    description: 'Universal Web3 credential manager.',
    category: 'wallet',
    url: 'https://wander.app',
    difficulty: 'beginner'
  },
  
  // Compute & Oracles
  {
    id: 'ao',
    name: 'AO',
    description: 'Computation primitive for the permaweb.',
    category: 'compute',
    url: 'https://ao.arweave.dev',
    difficulty: 'advanced'
  },
  {
    id: 'chainlink',
    name: 'Chainlink',
    description: 'Decentralized oracle network for smart contracts.',
    category: 'compute',
    url: 'https://chain.link',
    difficulty: 'intermediate'
  },
  {
    id: 'gelato',
    name: 'Gelato',
    description: 'Automated smart contract execution network.',
    category: 'compute',
    url: 'https://gelato.network',
    difficulty: 'intermediate'
  },
  
  // Frontend Libraries
  {
    id: 'ethers',
    name: 'ethers.js',
    description: 'Complete Ethereum library and wallet implementation.',
    category: 'frontend',
    url: 'https://docs.ethers.org',
    difficulty: 'intermediate'
  },
  {
    id: 'wagmi',
    name: 'wagmi',
    description: 'React Hooks for Ethereum.',
    category: 'frontend',
    url: 'https://wagmi.sh',
    difficulty: 'intermediate'
  },
  {
    id: 'viem',
    name: 'viem',
    description: 'TypeScript Interface for Ethereum.',
    category: 'frontend',
    url: 'https://viem.sh',
    difficulty: 'intermediate'
  },
  {
    id: 'web3js',
    name: 'web3.js',
    description: 'Ethereum JavaScript API.',
    category: 'frontend',
    url: 'https://web3js.readthedocs.io',
    difficulty: 'intermediate'
  },
];

// Sample learning resources
export const resources: Resource[] = [
  {
    id: 'ethereum-docs',
    title: 'Ethereum Documentation',
    description: 'Official Ethereum documentation for developers.',
    url: 'https://ethereum.org/developers',
    type: 'documentation',
    technologies: ['ethereum', 'solidity']
  },
  {
    id: 'solidity-tutorial',
    title: 'CryptoZombies',
    description: 'Learn Solidity by building your own crypto-collectibles game.',
    url: 'https://cryptozombies.io',
    type: 'tutorial',
    technologies: ['ethereum', 'solidity']
  },
  {
    id: 'arweave-docs',
    title: 'Arweave Documentation',
    description: 'Official Arweave development documentation.',
    url: 'https://docs.arweave.org',
    type: 'documentation',
    technologies: ['arweave']
  },
  {
    id: 'solana-docs',
    title: 'Solana Documentation',
    description: 'Official Solana developer documentation.',
    url: 'https://docs.solana.com',
    type: 'documentation',
    technologies: ['solana', 'rust']
  },
  {
    id: 'anchor-tutorial',
    title: 'Anchor Program Development',
    description: 'Guide to building Solana programs with Anchor.',
    url: 'https://www.anchor-lang.com/docs/intro-to-solana',
    type: 'tutorial',
    technologies: ['solana', 'anchor', 'rust']
  },
  {
    id: 'ipfs-docs',
    title: 'IPFS Documentation',
    description: 'Learn how to use IPFS for decentralized storage.',
    url: 'https://docs.ipfs.tech',
    type: 'documentation',
    technologies: ['ipfs']
  },
  {
    id: 'hardhat-tutorial',
    title: 'Hardhat Tutorial',
    description: 'Learn to use Hardhat for Ethereum development.',
    url: 'https://hardhat.org/tutorial',
    type: 'tutorial',
    technologies: ['hardhat', 'ethereum', 'solidity']
  },
  {
    id: 'ao-tutorial',
    title: 'AO Getting Started',
    description: 'Learn how to build with AO on the permaweb.',
    url: 'https://ao.arweave.dev',
    type: 'tutorial',
    technologies: ['arweave', 'ao']
  },
  {
    id: 'wagmi-docs',
    title: 'wagmi Documentation',
    description: 'React hooks for Ethereum applications.',
    url: 'https://wagmi.sh',
    type: 'documentation',
    technologies: ['wagmi', 'ethereum']
  },
];

// Generate stack recommendations based on form inputs
export function generateStackRecommendation(formData: FormData): StackRecommendation {
  // Filter technologies based on form data
  let filteredTechnologies: Technology[] = [];
  
  // Add blockchain
  const blockchainTech = technologies.find(tech => tech.id === formData.blockchain);
  if (blockchainTech) filteredTechnologies.push(blockchainTech);
  
  // Add language based on blockchain
  if (formData.blockchain === 'ethereum' || formData.blockchain === 'polygon') {
    filteredTechnologies.push(technologies.find(tech => tech.id === 'solidity')!);
  } else if (formData.blockchain === 'solana') {
    filteredTechnologies.push(technologies.find(tech => tech.id === 'rust')!);
  } else if (formData.blockchain === 'arweave') {
    filteredTechnologies.push(technologies.find(tech => tech.id === 'rust')!);
  }
  
  // Add framework based on blockchain
  if (formData.blockchain === 'ethereum' || formData.blockchain === 'polygon') {
    if (formData.experienceLevel === 'advanced') {
      filteredTechnologies.push(technologies.find(tech => tech.id === 'foundry')!);
    } else {
      filteredTechnologies.push(technologies.find(tech => tech.id === 'hardhat')!);
    }
  } else if (formData.blockchain === 'solana') {
    filteredTechnologies.push(technologies.find(tech => tech.id === 'anchor')!);
  }
  
  // Add wallet based on blockchain
  if (formData.blockchain === 'ethereum' || formData.blockchain === 'polygon') {
    filteredTechnologies.push(technologies.find(tech => tech.id === 'metamask')!);
  } else if (formData.blockchain === 'solana') {
    filteredTechnologies.push(technologies.find(tech => tech.id === 'phantom')!);
  } else if (formData.blockchain === 'arweave') {
    filteredTechnologies.push(technologies.find(tech => tech.id === 'arconnect')!);
  }
  
  // Add storage solution if needed
  if (formData.useCase.includes('storage')) {
    if (formData.blockchain === 'arweave') {
      filteredTechnologies.push(technologies.find(tech => tech.id === 'arweave-storage')!);
    } else {
      filteredTechnologies.push(technologies.find(tech => tech.id === 'ipfs')!);
    }
  }
  
  // Add compute solution if needed
  if (formData.useCase.includes('compute')) {
    if (formData.blockchain === 'arweave') {
      filteredTechnologies.push(technologies.find(tech => tech.id === 'ao')!);
    } else if (formData.blockchain === 'ethereum' || formData.blockchain === 'polygon') {
      filteredTechnologies.push(technologies.find(tech => tech.id === 'chainlink')!);
    }
  }
  
  // Add frontend library
  if (formData.blockchain === 'ethereum' || formData.blockchain === 'polygon') {
    if (formData.experienceLevel === 'beginner') {
      filteredTechnologies.push(technologies.find(tech => tech.id === 'web3js')!);
    } else {
      filteredTechnologies.push(technologies.find(tech => tech.id === 'wagmi')!);
      filteredTechnologies.push(technologies.find(tech => tech.id === 'viem')!);
    }
  }
  
  // Filter out any undefined values
  filteredTechnologies = filteredTechnologies.filter(Boolean);
  
  // Remove duplicates
  filteredTechnologies = filteredTechnologies.filter((tech, index, self) =>
    index === self.findIndex(t => t.id === tech.id)
  );
  
  // Get relevant resources
  const techIds = filteredTechnologies.map(tech => tech.id);
  const filteredResources = resources.filter(resource => 
    resource.technologies.some(techId => techIds.includes(techId))
  ).slice(0, 5); // Limit to 5 resources
  
  // Generate title based on project type and blockchain
  let title = '';
  if (formData.projectType === 'nft') {
    title = `NFT Development Stack on ${blockchainTech?.name}`;
  } else if (formData.projectType === 'defi') {
    title = `DeFi Application Stack on ${blockchainTech?.name}`;
  } else if (formData.projectType === 'dao') {
    title = `DAO Development Stack on ${blockchainTech?.name}`;
  } else if (formData.projectType === 'gaming') {
    title = `Web3 Gaming Stack on ${blockchainTech?.name}`;
  } else if (formData.projectType === 'ai-web3') {
    title = `AI & Web3 Integration Stack on ${blockchainTech?.name}`;
  } else {
    title = `Web3 Development Stack on ${blockchainTech?.name}`;
  }
  
  return {
    id: `stack-${Date.now()}`,
    title,
    description: `Customized stack recommendation for ${formData.experienceLevel} developers building a ${formData.projectType} project on ${blockchainTech?.name}.`,
    technologies: filteredTechnologies,
    resources: filteredResources
  };
}
