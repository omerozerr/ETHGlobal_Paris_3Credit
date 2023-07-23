import styles from './NftDisplay.module.css'
import Image from 'next/image'

const NftDisplay = ({tokenBalances}) => {
    console.log(tokenBalances.tokenAddress)
    function ipfsToHttp(url) {
        return url.replace('ipfs://', 'https://ipfs.io/ipfs/');
      }
    return(
        <div className={styles.displayContainer}>
            <Image 
                src={ipfsToHttp(tokenBalances.tokenNfts.metaData.image)}
                className={styles.profileLogo}
                width={92}
                height={92}
                alt="Logo" 
            />
            <div className={styles.nftAddress}>{tokenBalances.tokenAddress}</div>
            <div className={styles.nftValue}>+10</div>
        </div>
    )
}

export default NftDisplay