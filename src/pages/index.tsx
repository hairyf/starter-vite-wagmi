import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import { withLayout } from '../layout'
import { getEthersContract } from 'wagmi-ethers-adapters/ethers-v5'
import { contracts } from '@/config'

function Page() {
  const { address, isConnected } = useAccount()
  async function transfer() {
    const erc20 = getEthersContract(contracts.ERC20)
    const transaction = await erc20.transfer(address!, 0)
    await transaction.wait()
  }
  return (
    <>
      <div className="flex-center">
        <ConnectButton />
      </div>
      {isConnected && (
        <div className="flex-center mt-12px">
          <button onClick={transfer}>Transfer By ERC20</button>
        </div>
      )}
    </>
  )
}

export default withLayout(Page)
