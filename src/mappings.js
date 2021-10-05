export const mappings = {
  "commit": {
    "id": "8d78a30",
    "fullId": "8d78a3066858c8b87e924b15c4d047a5ceae928b",
    "filePath": "lunar/ax/llIIIlllllIIIllllIIIIIIIl"
  },
  "LTFolder": [
    "Scripts\\",
    "Scripts\\checkCommitId.txt",
    "Scripts\\replace1.txt",
    "Scripts\\replace2.txt",
    "Temp\\",
    "Temp\\file.txt",
    "assembly.txt",
    "recaf.jar"
  ],
  "patchs": {
    "freelook": [
      {
        "patchType": "replace",
        "scripts": {
          "searchFor": "replace1.txt",
          "replaceWith": "replace2.txt"
        },
        "path": "lunar/dC/llIlIlIllIllIllIIIIIIIIlI",
        "methodName": "llIIIlllllIIIllllIIIIIIIl(Lcom/google/gson/JsonObject;Ljava/util/function/Predicate;Llunar/aS/IIllIllIIIlIIIlIIIlIlllll;)V",
        "searchFor": "LDC \"enabled\"",
        "replaceWith": "LDC \"removedByLunarTweaks\""
      }
    ],
    "pinnedServers": [
      {
        "patchType": "replace",
        "scripts": {
          "searchFor": "replace1.txt",
          "replaceWith": "replace2.txt"
        },
        "path": "lunar/dC/llIlIlIllIllIllIIIIIIIIlI",
        "methodName": "run()V",
        "searchFor": "LDC \"pinnedServers\"",
        "replaceWith": "LDC \"removedByLunarTweaks\""
      }
    ],
    "modspacket": [
      {
        "patchType": "replace",
        "scripts": {
          "searchFor": "replace1.txt",
          "replaceWith": "replace2.txt"
        },
        "path": "com/lunarclient/bukkitapi/nethandler/LCPacket",
        "methodName": "<clinit>()V",
        "searchFor": "AD:\nLINE AD 56\nBIPUSH 31\nLDC Lcom/lunarclient/bukkitapi/nethandler/client/LCPacketModSettings;\nINVOKESTATIC com/lunarclient/bukkitapi/nethandler/LCPacket.addPacket(ILjava/lang/Class;)V\nAE:",
        "replaceWith": "AE:"
      }
    ]
  }
}
