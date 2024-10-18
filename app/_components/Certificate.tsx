import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { Certifications } from "@/constants";
import {
  BadgeCheck,
  CalendarIcon,
  DownloadIcon,
  ExternalLinkIcon,
} from "lucide-react";
import Link from "next/link";

const Certificate = (item: Certifications) => {
  return (
    <div className="container mx-auto pt-8">
      <Card className="max-w-3xl mx-auto bg-gradient-to-br from-white to-gray-100 shadow-lg">
        <CardHeader className="text-center border-b border-gray-200 pb-8">
          <div className="mb-4">
            <Badge
              variant="secondary"
              className="text-sm font-medium bg-blue-100 hover:bg-blue-100 text-blue-800">
              Certificate of Completion
            </Badge>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {item.title}
          </h1>
          <p className="text-gray-600">Awarded to</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-2">
            {item.awardedTo}
          </h2>
        </CardHeader>
        <CardContent className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <CalendarIcon className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-600">
                  Issued on {item.issuedOn}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <BadgeCheck className="w-5 h-5 text-blue-500" />
                <span className="text-sm text-gray-600">
                  Verified by{" "}
                  <Link href={item.institutionUrl} className="hover:underline">
                    {item.verifiedBy}
                  </Link>
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-900">
                Skills Acquired
              </h3>
              <div className="flex flex-wrap gap-2">
                {item.stack.map((s, index) => (
                  <Badge
                    className="bg-blue-100 text-blue-800 cursor-default"
                    variant="outline"
                    key={index}>
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Course Description
            </h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col justify-between items-start lg:items-center border-t border-gray-200 pt-6">
          <div className="text-sm text-gray-500">
            Certificate ID: {item.certificateId}
          </div>
          <div className="flex gap-2 w-full justify-center pt-6">
            <Link href={item.link}>
              <Button
                className="bg-blue-100 hover:bg-blue-200 text-blue-800 hover:text-blue-800"
                variant="outline"
                size="sm">
                <ExternalLinkIcon className="mr-2 h-4 w-4" />
                Verify
              </Button>
            </Link>
            <Button
              size="sm"
              className="bg-blue-800 hover:bg-blue-700 text-blue-100">
              <DownloadIcon className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Certificate;
