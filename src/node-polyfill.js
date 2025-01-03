const nodeWebAudio = require('./node-ponyfill')

if (!global.AudioContext) {
    global.OfflineAudioCompletionEvent =
        nodeWebAudio.OfflineAudioCompletionEvent
    global.AudioProcessingEvent = nodeWebAudio.AudioProcessingEvent
    global.AudioRenderCapacityEvent = nodeWebAudio.AudioRenderCapacityEvent
    global.BaseAudioContext = nodeWebAudio.BaseAudioContext
    global.AudioContext = nodeWebAudio.AudioContext
    global.OfflineAudioContext = nodeWebAudio.OfflineAudioContext
    global.ScriptProcessorNode = nodeWebAudio.ScriptProcessorNode
    global.AudioWorkletNode = nodeWebAudio.AudioWorkletNode
    global.AnalyserNode = nodeWebAudio.AnalyserNode
    global.AudioBufferSourceNode = nodeWebAudio.AudioBufferSourceNode
    global.BiquadFilterNode = nodeWebAudio.BiquadFilterNode
    global.ChannelMergerNode = nodeWebAudio.ChannelMergerNode
    global.ChannelSplitterNode = nodeWebAudio.ChannelSplitterNode
    global.ConstantSourceNode = nodeWebAudio.ConstantSourceNode
    global.ConvolverNode = nodeWebAudio.ConvolverNode
    global.DelayNode = nodeWebAudio.DelayNode
    global.DynamicsCompressorNode = nodeWebAudio.DynamicsCompressorNode
    global.GainNode = nodeWebAudio.GainNode
    global.IIRFilterNode = nodeWebAudio.IIRFilterNode
    global.MediaStreamAudioSourceNode = nodeWebAudio.MediaStreamAudioSourceNode
    global.OscillatorNode = nodeWebAudio.OscillatorNode
    global.PannerNode = nodeWebAudio.PannerNode
    global.StereoPannerNode = nodeWebAudio.StereoPannerNode
    global.WaveShaperNode = nodeWebAudio.WaveShaperNode
    global.AudioNode = nodeWebAudio.AudioNode
    global.AudioScheduledSourceNode = nodeWebAudio.AudioScheduledSourceNode
    global.AudioParam = nodeWebAudio.AudioParam
    global.AudioDestinationNode = nodeWebAudio.AudioDestinationNode
    global.AudioListener = nodeWebAudio.AudioListener
    global.AudioWorklet = nodeWebAudio.AudioWorklet
    global.AudioParamMap = nodeWebAudio.AudioParamMap
    global.AudioRenderCapacity = nodeWebAudio.AudioRenderCapacity
    global.PeriodicWave = nodeWebAudio.PeriodicWave
    global.AudioBuffer = nodeWebAudio.AudioBuffer
}
