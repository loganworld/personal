
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";

const TempPost = () => {
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
          <CardTitle className="text-2xl md:text-3xl font-medium">The Ethereum Merge: Implications for Energy Consumption</CardTitle>
          <CardDescription className="text-lg mt-2">
            Exploring how the shift to Proof of Stake transformed Ethereum's environmental impact
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose prose-slate dark:prose-invert">
            <p>
              September 15, 2022 marked a historic moment for the Ethereum blockchain as it completed "The Merge" - 
              the transition from a Proof of Work (PoW) to a Proof of Stake (PoS) consensus mechanism. This 
              fundamental change has dramatically reduced the energy consumption of the second-largest 
              cryptocurrency network by over 99.9%.
            </p>
            
            <h2>Understanding The Energy Problem</h2>
            
            <p>
              Prior to The Merge, Ethereum, like Bitcoin, relied on energy-intensive mining operations to secure 
              the network and validate transactions. This process required specialized hardware and massive 
              amounts of electricity, with Ethereum consuming roughly 112 TWh per year - comparable to the 
              energy usage of the Netherlands.
            </p>
            
            <h2>The Proof of Stake Solution</h2>
            
            <p>
              Under the new Proof of Stake model, validators are selected to create new blocks based on their 
              Ethereum holdings rather than computational work. This eliminates the need for energy-intensive 
              mining operations and the associated hardware arms race.
            </p>
            
            <p>
              The results have been dramatic:
            </p>
            
            <ul>
              <li><strong>Energy Reduction:</strong> Ethereum's energy consumption has dropped by approximately 99.95%.</li>
              <li><strong>Carbon Footprint:</strong> The network's carbon emissions have plummeted from 11 million tons per year to just a few thousand.</li>
              <li><strong>Hardware Waste:</strong> The obsolescence of specialized mining equipment has been eliminated.</li>
            </ul>
            
            <h2>Beyond Environmental Benefits</h2>
            
            <p>
              While the environmental improvements are substantial, The Merge has additional implications:
            </p>
            
            <ul>
              <li><strong>Economic Changes:</strong> The issuance rate of new ETH has decreased, potentially making the asset more scarce.</li>
              <li><strong>Security Model:</strong> The security assumptions of the network have fundamentally changed.</li>
              <li><strong>Scalability Foundation:</strong> This transition sets the stage for future upgrades that may improve Ethereum's transaction throughput.</li>
            </ul>
            
            <p>
              The successful implementation of The Merge demonstrates that blockchain networks can evolve to 
              address their environmental impact while maintaining security and decentralization. This represents 
              a significant milestone in the maturation of blockchain technology and its potential for sustainable adoption.
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

export default TempPost;
