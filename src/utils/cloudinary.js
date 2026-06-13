import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();
//configuration
cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
    });

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) throw new Error("Local file path is required for uploading to Cloudinary.");
        const result = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto", // Automatically detect the file type (image, video, etc.)
            folder: "video-sharing-app" // Optional: specify a folder in Cloudinary to organize uploads
        });
        console.log("Upload successful. Cloudinary URL:", result.secure_url);
        //delete the file from local storage after uploading to cloudinary
        fs.unlinkSync(localFilePath);
        return result;
    } catch (error) {
        console.error("Error uploading to Cloudinary:", error);
        throw error;
    }       
}

export default uploadOnCloudinary;