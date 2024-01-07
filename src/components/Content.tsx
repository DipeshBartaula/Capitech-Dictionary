import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface ChildComponentProps {
    meaning: any;
}

const Content: React.FC<ChildComponentProps> = ({ meaning }) => {
    const [turn, setTurn] = useState('noun' )
    const [audio,setAudio]= useState(false)
    const onChoice = "bg-black text-white rounded-[5px] px-[13px]"
    const offChoice = "bg-box text-black rounded-[5px] px-[13px]"
    const playPath = '/assets/play_button.svg'
    const pausePath = '/assets/pause_button.svg'

    const handleAudio = ()=>{
        const audioElement = document.getElementById("audio-element")
        if (audioElement) {
            if (audio) {
              audioElement.pause();
            } else {
              audioElement.play();
            }
      
            setAudio(!audio);
          }
          const handleEnded = () => {
            setAudio(false);
          };
      
          audioElement?.addEventListener('ended', handleEnded);
      
          return () => {
            audioElement?.removeEventListener('ended', handleEnded);
            audioElement?.pause();
          };

    }
    return (
        <div className='font-Inter font-[400] text-[20px] leading-[30px]'>
            <div className='mx-[230px] w-[980px] h-[626px] border-[3px] rounded-[35px]'>
                <div className='flex'>
                    <button onClick={handleAudio}>
                        <Image className='mt-[36px] ml-[18px]' src={`${audio ? pausePath : playPath}`} width={61} height={61} alt='Play button' />
                        <audio id="audio-element" src={`${meaning[0].phonetics?.filter((item)=>{
                            return item.audio!==""
                        })[0].audio}`}></audio>
                    </button>
                    <p className='ml-[16px] mt-[52px] w-[119px] h-[26px]'>{meaning[0].phonetic}</p>
                </div>
                <div className='flex gap-[13px] mt-[26px]'>
                    <button onClick={() => setTurn('noun' )} className={`${turn == 'noun' ? onChoice : offChoice} ml-[32px]`}>noun</button>
                    <button onClick={() => setTurn('verb' )} className={`${turn == 'verb' ? onChoice : offChoice}`}>verb</button>
                </div>
                <div className='mt-[15px] ml-[31px] w-[919px] h-[216px]'>

                    
                    {turn == "noun" ? meaning[0].meanings[0]?.definitions.slice(0, 3).map((item: { definition: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }, index: any) => {
                        return <div className='flex gap-2'>
                            <p>{index+1}.</p>
                            <p key={index}>{item.definition}</p>
                        </div>
                    }): 
                    meaning[0].meanings[1]?.definitions.slice(0, 3).map((item: { definition: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }, index: any) => {
                        return <div className='flex gap-2'>
                            <p>{index+1}.</p>
                            <p key={index}>{item.definition}</p>
                        </div>
                    })}
                    
                </div>
            </div>
        </div>
    )
}

export default Content