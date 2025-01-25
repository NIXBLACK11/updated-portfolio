import { ProCard } from "./ProCard"

export const Publications = () => {
    return (
        <div className="w-full">
            <ProCard
                projectTitle="Research Paper on IOT malware detection"
                description="Led IoT malware research using VGG16 image models, achieving 95.6% accuracy and 85% precision, and implemented Keras pre-trained models for enhanced image classification, with proficiency in IoT security, deep learning, Keras, and Python"
                link="https://www.researchgate.net/publication/377719434_A_Comparative_Analysis_of_IoT_Malware_Detection_Using_CNN_and_Deep_Learning"
                skills={[
                    { name: "Python" },
                    { name: "Keras" },
                    { name: "Tensorflow" }
                ]}
            />
        </div>
    )
}