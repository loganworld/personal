
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";

const TempBlog = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <Card className="shadow-md border-border">
        <CardHeader>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              <span>May 22, 2023</span>
            </div>
            <span>•</span>
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              <span>5 min read</span>
            </div>
          </div>
          <CardTitle className="text-2xl md:text-3xl font-medium">Building Decentralized Applications: A Beginner's Guide</CardTitle>
          <CardDescription className="text-lg mt-2">
            Understanding the fundamentals of Web3 development and blockchain integration
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose prose-slate dark:prose-invert">
            <p>
              The world of decentralized applications (dApps) offers a new paradigm for software development. 
              Unlike traditional applications, dApps operate on blockchain networks, bringing benefits like 
              transparency, immutability, and resistance to censorship.
            </p>
            
            <h2>Why Build Decentralized Applications?</h2>
            
            <p>
              Decentralized applications provide several advantages over their centralized counterparts:
            </p>
            
            <ul>
              <li><strong>No Single Point of Failure:</strong> By operating on distributed networks, dApps remain resilient to outages.</li>
              <li><strong>User-Owned Data:</strong> Users maintain control over their personal information.</li>
              <li><strong>Transparent Operations:</strong> All transactions are visible on the blockchain.</li>
              <li><strong>Resistant to Censorship:</strong> No central authority can remove or modify content.</li>
            </ul>
            
            <h2>Getting Started with Web3 Development</h2>
            
            <p>
              To begin building decentralized applications, you'll need to familiarize yourself with several key technologies:
            </p>
            
            <ul>
              <li><strong>Smart Contracts:</strong> Self-executing agreements written in languages like Solidity.</li>
              <li><strong>Web3.js or Ethers.js:</strong> Libraries for interacting with blockchain networks.</li>
              <li><strong>MetaMask or WalletConnect:</strong> Tools for connecting user wallets to your application.</li>
              <li><strong>IPFS:</strong> A distributed file system for storing application assets.</li>
            </ul>
            
            <p>
              The journey into decentralized application development can be challenging but rewarding. As the Web3 
              ecosystem continues to evolve, developers who understand these technologies will be well-positioned 
              to create the next generation of internet applications.
            </p>
          </div>
        </CardContent>
        <CardFooter className="border-t pt-6 mt-4">
          <Link to="/">
            <Button variant="outline" className="group">
              <span>Back to all posts</span>
            </Button>
          </Link>
          <Link to="/about" className="ml-auto flex items-center text-primary font-medium hover:underline">
            More about the author
            <ArrowUpRight size={16} className="ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TempBlog;
