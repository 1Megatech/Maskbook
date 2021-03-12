import { defineSocialNetworkWorker } from '../../../social-network-next/worker'
import { sharedSettings } from '../index'
import { fetchPostContent, fetchProfile } from './fetch'

export const twitterWorkerSelf = defineSocialNetworkWorker({
    ...sharedSettings,
    fetchPostContent,
    fetchProfile,
    gunNetworkHint: 'twitter-',
})
