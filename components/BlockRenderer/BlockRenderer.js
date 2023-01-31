import {Cover} from "components/Cover";
import {Heading} from "components/Heading";

export const BlockRenderer = ({blocks}) => {
    return blocks.map((block) => {
        switch(block.name){
            case 'core/heading': {
                console.log('block', block);

                return <Heading key={block.id} textAlign={block.attributes.textAlign} content={block.attributes.content}/>
            }
            case 'core/cover': {
                console.log('core/cover', block);
                return (
                <Cover key={block.id} background={block.attributes.url}>
                    <BlockRenderer blocks={block.innerBlocks}/>
                </Cover>
                );
            }
            default:
                return null;
        }
    });
};